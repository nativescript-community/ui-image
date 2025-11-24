package com.nativescript.image;

import android.graphics.Matrix;
import android.graphics.RectF;
import android.graphics.drawable.Drawable;
import android.widget.ImageView;

/**
 * Utilities to compute an image -> view matrix that respects an
 * ImageView.ScaleType
 * while also applying an image rotation (degrees).
 *
 * Notes:
 * - Rotation is applied around the drawable's center before fitting/scaling.
 * - The output matrix maps drawable coordinates to view coordinates.
 *
 * Usage:
 * Matrix m = new Matrix();
 * ScaleUtils.getImageMatrix(drawable, viewWidth, viewHeight, rotationDegrees,
 * scaleType, m);
 */
public final class ScaleUtils {

    private ScaleUtils() {
    }

    /**
     * Compute a matrix that maps the drawable (drawable-local coords:
     * 0..intrinsicW/H)
     * into view coordinates, applying rotation (degrees) about the drawable center
     * first,
     * then the scaleType fit.
     *
     * rotationDegrees is a float to allow smooth animated rotation.
     */
    public static void getImageMatrix(
            Drawable d,
            int viewWidth,
            int viewHeight,
            float rotationDegrees,
            ImageView.ScaleType scaleType,
            Matrix outMatrix) {
        if (d == null) {
            outMatrix.reset();
            return;
        }
        float dW = d.getIntrinsicWidth();
        float dH = d.getIntrinsicHeight();
        if (dW <= 0 || dH <= 0 || viewWidth == 0 || viewHeight == 0) {
            outMatrix.reset();
            return;
        }

        RectF src = new RectF(0, 0, dW, dH);
        Matrix m = new Matrix();

        // 1) rotate around drawable center (drawable-local coords)
        if ((rotationDegrees % 360f) != 0f) {
            m.postRotate(rotationDegrees, dW / 2f, dH / 2f);
        }

        // 2) compute rotated drawable bounds in drawable-local coords
        RectF rotated = new RectF();
        m.mapRect(rotated, src);

        float rW = rotated.width();
        float rH = rotated.height();

        float scaleX = (float) viewWidth / rW;
        float scaleY = (float) viewHeight / rH;

        switch (scaleType) {
            case CENTER:
                // no scaling, center only; rotation already applied
                break;
            case CENTER_CROP: {
                float scale = Math.max(scaleX, scaleY);
                m.postScale(scale, scale, dW / 2f, dH / 2f);
                break;
            }
            case CENTER_INSIDE: {
                float scale = Math.min(1f, Math.min(scaleX, scaleY));
                m.postScale(scale, scale, dW / 2f, dH / 2f);
                break;
            }
            case FIT_CENTER:
            case FIT_START:
            case FIT_END:
            case FIT_XY: {
                if (scaleType == ImageView.ScaleType.FIT_XY) {
                    m.postScale(scaleX, scaleY, dW / 2f, dH / 2f);
                } else {
                    float scale = Math.min(scaleX, scaleY);
                    m.postScale(scale, scale, dW / 2f, dH / 2f);
                }
                break;
            }
            case MATRIX:
            default:
                // Let the caller manage the matrix in MATRIX mode; here treat like FIT_CENTER.
                float scale = Math.min(scaleX, scaleY);
                m.postScale(scale, scale, dW / 2f, dH / 2f);
                break;
        }

        // 3) translate to position according to scaleType
        RectF mapped = new RectF();
        m.mapRect(mapped, src);

        float dx = 0f;
        float dy = 0f;

        if (scaleType == ImageView.ScaleType.FIT_START) {
            dx = 0f - mapped.left;
            dy = 0f - mapped.top;
        } else if (scaleType == ImageView.ScaleType.FIT_END) {
            dx = viewWidth - mapped.right;
            dy = viewHeight - mapped.bottom;
        } else {
            // center
            dx = viewWidth * 0.5f - mapped.centerX();
            dy = viewHeight * 0.5f - mapped.centerY();
        }

        m.postTranslate(dx, dy);

        outMatrix.set(m);
    }
}