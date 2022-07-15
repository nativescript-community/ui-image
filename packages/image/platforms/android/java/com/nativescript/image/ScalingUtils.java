package com.nativescript.image;

import android.graphics.Matrix;
import android.graphics.PointF;
import android.graphics.Rect;
import android.util.Log;

/** Performs scale type calculations. */
public class ScalingUtils {

  /**
   * Options for scaling the child bounds to the parent bounds.
   *
   * <p>Similar to {@link android.widget.ImageView.ScaleType}, but ScaleType.MATRIX is not
   * supported. To use matrix scaling, use a {@link MatrixDrawable}. An additional scale type
   * (FOCUS_CROP) is provided.
   *
   * <p>
   */
  public interface ScaleType {

    /**
     * Scales width and height independently, so that the child matches the parent exactly. This may
     * change the aspect ratio of the child.
     */
    com.facebook.drawee.drawable.ScalingUtils.ScaleType FIT_XY = ScaleTypeFitXY.INSTANCE;

    /**
     * Scales the child so that the child's width fits exactly. The height will be cropped if it
     * exceeds parent's bounds. Aspect ratio is preserved. Child is centered within the parent's
     * bounds.
     */
    com.facebook.drawee.drawable.ScalingUtils.ScaleType FIT_X = ScaleTypeFitX.INSTANCE;

    /**
     * Scales the child so that the child's height fits exactly. The width will be cropped if it
     * exceeds parent's bounds. Aspect ratio is preserved. Child is centered within the parent's
     * bounds.
     */
    com.facebook.drawee.drawable.ScalingUtils.ScaleType FIT_Y = ScaleTypeFitY.INSTANCE;

    /**
     * Scales the child so that it fits entirely inside the parent. At least one dimension (width or
     * height) will fit exactly. Aspect ratio is preserved. Child is aligned to the top-left corner
     * of the parent.
     */
    com.facebook.drawee.drawable.ScalingUtils.ScaleType FIT_START = ScaleTypeFitStart.INSTANCE;

    /**
     * Scales the child so that it fits entirely inside the parent. At least one dimension (width or
     * height) will fit exactly. Aspect ratio is preserved. Child is centered within the parent's
     * bounds.
     */
    com.facebook.drawee.drawable.ScalingUtils.ScaleType FIT_CENTER = ScaleTypeFitCenter.INSTANCE;

    /**
     * Scales the child so that it fits entirely inside the parent. At least one dimension (width or
     * height) will fit exactly. Aspect ratio is preserved. Child is aligned to the bottom-right
     * corner of the parent.
     */
    com.facebook.drawee.drawable.ScalingUtils.ScaleType FIT_END = ScaleTypeFitEnd.INSTANCE;

    /** Performs no scaling. Child is centered within parent's bounds. */
    com.facebook.drawee.drawable.ScalingUtils.ScaleType CENTER = ScaleTypeCenter.INSTANCE;

    /**
     * Scales the child so that it fits entirely inside the parent. Unlike FIT_CENTER, if the child
     * is smaller, no up-scaling will be performed. Aspect ratio is preserved. Child is centered
     * within parent's bounds.
     */
    com.facebook.drawee.drawable.ScalingUtils.ScaleType CENTER_INSIDE = ScaleTypeCenterInside.INSTANCE;

    /**
     * Scales the child so that both dimensions will be greater than or equal to the corresponding
     * dimension of the parent. At least one dimension (width or height) will fit exactly. Child is
     * centered within parent's bounds.
     */
    com.facebook.drawee.drawable.ScalingUtils.ScaleType CENTER_CROP = ScaleTypeCenterCrop.INSTANCE;

    /**
     * Scales the child so that both dimensions will be greater than or equal to the corresponding
     * dimension of the parent. At least one dimension (width or height) will fit exactly. The
     * child's focus point will be centered within the parent's bounds as much as possible without
     * leaving empty space. It is guaranteed that the focus point will be visible and centered as
     * much as possible. If the focus point is set to (0.5f, 0.5f), result will be equivalent to
     * CENTER_CROP.
     */
    com.facebook.drawee.drawable.ScalingUtils.ScaleType FOCUS_CROP = ScaleTypeFocusCrop.INSTANCE;

    /**
     * Scales the child so that it fits entirely inside the parent. At least one dimension (width or
     * height) will fit exactly. Aspect ratio is preserved. Child is aligned to the bottom-left
     * corner of the parent.
     */
    com.facebook.drawee.drawable.ScalingUtils.ScaleType FIT_BOTTOM_START = ScaleTypeFitBottomStart.INSTANCE;

    /**
     * Gets transformation matrix based on the scale type.
     *
     * @param outTransform out matrix to store result
     * @param parentBounds parent bounds
     * @param childWidth child width
     * @param childHeight child height
     * @param focusX focus point x coordinate, relative [0...1]
     * @param focusY focus point y coordinate, relative [0...1]
     * @return same reference to the out matrix for convenience
     */
    Matrix getTransform(
        Matrix outTransform,
        Rect parentBounds,
        int childWidth,
        int childHeight,
        float focusX,
        float focusY);
  }

  

  /** A convenience base class that has some common logic. */
  public abstract static class AbstractScaleType implements com.facebook.drawee.drawable.ScalingUtils.ScaleType, com.facebook.drawee.drawable.ScalingUtils.StatefulScaleType {
    protected Matrix _imageMatrix = null;
    protected float _imageRotation = 0;
    public void setImageMatrix(Matrix matrix) {
        _imageMatrix = matrix;
    }
    public void setImageRotation(float rotation) {
        _imageRotation = rotation;
    }

    @Override
    public Object getState() {
        if (_imageMatrix != null) {
            return _imageMatrix;
        }
        return _imageRotation;
    }
    @Override
    public Matrix getTransform(
        Matrix outTransform,
        Rect parentRect,
        int childWidth,
        int childHeight,
        float focusX,
        float focusY) {
        float sX = (float) parentRect.width() / (float) childWidth;
        float sY = (float) parentRect.height() / (float) childHeight;
        float rotationDelta = (90 - (_imageRotation % 180))/90.0f;
        if (rotationDelta != 1) {
            float destSX = (float) parentRect.width() / (float) childHeight;
            float destSY = (float) parentRect.height() / (float) childWidth;
          if (rotationDelta < 0) {
            sX = destSX + rotationDelta * (destSX - sX);
            sY = destSY + rotationDelta * (destSY - sY);
          } else {
            sX = sX + (1 - rotationDelta) * (destSX - sX);
            sY = sY + (1 - rotationDelta) * (destSY - sY);
          }
            
        }
        getTransformImpl(outTransform, parentRect, childWidth, childHeight, focusX, focusY, sX, sY);
        if (_imageMatrix != null) {
            outTransform.preConcat(_imageMatrix);
        } else if (_imageRotation != 0) {
            outTransform.preRotate(_imageRotation, childWidth / 2.0f, childHeight / 2.0f);
        }
      
      return outTransform;
    }

    public abstract void getTransformImpl(
        Matrix outTransform,
        Rect parentRect,
        int childWidth,
        int childHeight,
        float focusX,
        float focusY,
        float scaleX,
        float scaleY);
  }

  public static class ScaleTypeFitXY extends AbstractScaleType {

    public static final com.facebook.drawee.drawable.ScalingUtils.ScaleType INSTANCE = new ScaleTypeFitXY();

    @Override
    public void getTransformImpl(
        Matrix outTransform,
        Rect parentRect,
        int childWidth,
        int childHeight,
        float focusX,
        float focusY,
        float scaleX,
        float scaleY) {
      float dx = parentRect.left;
      float dy = parentRect.top;
      outTransform.setScale(scaleX, scaleY);
      outTransform.postTranslate((int) (dx + 0.5f), (int) (dy + 0.5f));
    }

    @Override
    public String toString() {
      return "fit_xy";
    }
  }

  public static class ScaleTypeFitStart extends AbstractScaleType {

    public static final com.facebook.drawee.drawable.ScalingUtils.ScaleType INSTANCE = new ScaleTypeFitStart();

    @Override
    public void getTransformImpl(
        Matrix outTransform,
        Rect parentRect,
        int childWidth,
        int childHeight,
        float focusX,
        float focusY,
        float scaleX,
        float scaleY) {
      float scale = Math.min(scaleX, scaleY);
      float dx = parentRect.left;
      float dy = parentRect.top;
      outTransform.setScale(scale, scale);
      outTransform.postTranslate((int) (dx + 0.5f), (int) (dy + 0.5f));
    }

    @Override
    public String toString() {
      return "fit_start";
    }
  }

  public static class ScaleTypeFitBottomStart extends AbstractScaleType {

    public static final com.facebook.drawee.drawable.ScalingUtils.ScaleType INSTANCE = new ScaleTypeFitBottomStart();

    @Override
    public void getTransformImpl(
        Matrix outTransform,
        Rect parentRect,
        int childWidth,
        int childHeight,
        float focusX,
        float focusY,
        float scaleX,
        float scaleY) {
      float scale = Math.min(scaleX, scaleY);
      float dx = parentRect.left;
      float dy = parentRect.top + (parentRect.height() - childHeight * scale);
      outTransform.setScale(scale, scale);
      outTransform.postTranslate((int) (dx + 0.5f), (int) (dy + 0.5f));
    }

    @Override
    public String toString() {
      return "fit_bottom_start";
    }
  }

  public static class ScaleTypeFitCenter extends AbstractScaleType {

    public static final com.facebook.drawee.drawable.ScalingUtils.ScaleType INSTANCE = new ScaleTypeFitCenter();

    @Override
    public void getTransformImpl(
        Matrix outTransform,
        Rect parentRect,
        int childWidth,
        int childHeight,
        float focusX,
        float focusY,
        float scaleX,
        float scaleY) {
      float scale =  Math.min(scaleX, scaleY);
      float dx = parentRect.left + (parentRect.width() - childWidth * scale) * 0.5f;
      float dy = parentRect.top + (parentRect.height() - childHeight * scale) * 0.5f;
      outTransform.setScale(scale, scale);
      outTransform.postTranslate((int) (dx + 0.5f), (int) (dy + 0.5f));
    }

    @Override
    public String toString() {
      return "fit_center";
    }
  }

  public static class ScaleTypeFitEnd extends AbstractScaleType {

    public static final com.facebook.drawee.drawable.ScalingUtils.ScaleType INSTANCE = new ScaleTypeFitEnd();

    @Override
    public void getTransformImpl(
        Matrix outTransform,
        Rect parentRect,
        int childWidth,
        int childHeight,
        float focusX,
        float focusY,
        float scaleX,
        float scaleY) {
      float scale = Math.min(scaleX, scaleY);
      float dx = parentRect.left + (parentRect.width() - childWidth * scale);
      float dy = parentRect.top + (parentRect.height() - childHeight * scale);
      outTransform.setScale(scale, scale);
      outTransform.postTranslate((int) (dx + 0.5f), (int) (dy + 0.5f));
    }

    @Override
    public String toString() {
      return "fit_end";
    }
  }

  public static class ScaleTypeCenter extends AbstractScaleType {

    public static final com.facebook.drawee.drawable.ScalingUtils.ScaleType INSTANCE = new ScaleTypeCenter();

    @Override
    public void getTransformImpl(
        Matrix outTransform,
        Rect parentRect,
        int childWidth,
        int childHeight,
        float focusX,
        float focusY,
        float scaleX,
        float scaleY) {
      float dx = parentRect.left + (parentRect.width() - childWidth) * 0.5f;
      float dy = parentRect.top + (parentRect.height() - childHeight) * 0.5f;
      outTransform.setTranslate((int) (dx + 0.5f), (int) (dy + 0.5f));
    }

    @Override
    public String toString() {
      return "center";
    }
  }

  public static class ScaleTypeCenterInside extends AbstractScaleType {

    public static final com.facebook.drawee.drawable.ScalingUtils.ScaleType INSTANCE = new ScaleTypeCenterInside();

    @Override
    public void getTransformImpl(
        Matrix outTransform,
        Rect parentRect,
        int childWidth,
        int childHeight,
        float focusX,
        float focusY,
        float scaleX,
        float scaleY) {
      float scale = Math.min(Math.min(scaleX, scaleY), 1.0f);
      float dx = parentRect.left + (parentRect.width() - childWidth * scale) * 0.5f;
      float dy = parentRect.top + (parentRect.height() - childHeight * scale) * 0.5f;
      outTransform.setScale(scale, scale);
      outTransform.postTranslate((int) (dx + 0.5f), (int) (dy + 0.5f));
    }

    @Override
    public String toString() {
      return "center_inside";
    }
  }

  public static class ScaleTypeCenterCrop extends AbstractScaleType {

    public static final com.facebook.drawee.drawable.ScalingUtils.ScaleType INSTANCE = new ScaleTypeCenterCrop();

    @Override
    public void getTransformImpl(
        Matrix outTransform,
        Rect parentRect,
        int childWidth,
        int childHeight,
        float focusX,
        float focusY,
        float scaleX,
        float scaleY) {
      float scale, dx, dy;
      if (scaleY > scaleX) {
        scale = scaleY;
        dx = parentRect.left + (parentRect.width() - childWidth * scale) * 0.5f;
        dy = parentRect.top;
      } else {
        scale = scaleX;
        dx = parentRect.left;
        dy = parentRect.top + (parentRect.height() - childHeight * scale) * 0.5f;
      }
      outTransform.setScale(scale, scale);
      outTransform.postTranslate((int) (dx + 0.5f), (int) (dy + 0.5f));
    }

    @Override
    public String toString() {
      return "center_crop";
    }
  }

  public static class ScaleTypeFocusCrop extends AbstractScaleType {

    public static final com.facebook.drawee.drawable.ScalingUtils.ScaleType INSTANCE = new ScaleTypeFocusCrop();

    @Override
    public void getTransformImpl(
        Matrix outTransform,
        Rect parentRect,
        int childWidth,
        int childHeight,
        float focusX,
        float focusY,
        float scaleX,
        float scaleY) {
      float scale, dx, dy;
      if (scaleY > scaleX) {
        scale = scaleY;
        dx = parentRect.width() * 0.5f - childWidth * scale * focusX;
        dx = parentRect.left + Math.max(Math.min(dx, 0), parentRect.width() - childWidth * scale);
        dy = parentRect.top;
      } else {
        scale = scaleX;
        dx = parentRect.left;
        dy = parentRect.height() * 0.5f - childHeight * scale * focusY;
        dy = parentRect.top + Math.max(Math.min(dy, 0), parentRect.height() - childHeight * scale);
      }
      outTransform.setScale(scale, scale);
      outTransform.postTranslate((int) (dx + 0.5f), (int) (dy + 0.5f));
    }

    @Override
    public String toString() {
      return "focus_crop";
    }
  }

  public static class ScaleTypeFitX extends AbstractScaleType {

    public static final com.facebook.drawee.drawable.ScalingUtils.ScaleType INSTANCE = new ScaleTypeFitX();

    @Override
    public void getTransformImpl(
        Matrix outTransform,
        Rect parentRect,
        int childWidth,
        int childHeight,
        float focusX,
        float focusY,
        float scaleX,
        float scaleY) {
      float scale, dx, dy;
      scale = scaleX;
      dx = parentRect.left;
      dy = parentRect.top + (parentRect.height() - childHeight * scale) * 0.5f;
      outTransform.setScale(scale, scale);
      outTransform.postTranslate((int) (dx + 0.5f), (int) (dy + 0.5f));
    }

    @Override
    public String toString() {
      return "fit_x";
    }
  }

  public static class ScaleTypeFitY extends AbstractScaleType {

    public static final com.facebook.drawee.drawable.ScalingUtils.ScaleType INSTANCE = new ScaleTypeFitY();

    @Override
    public void getTransformImpl(
        Matrix outTransform,
        Rect parentRect,
        int childWidth,
        int childHeight,
        float focusX,
        float focusY,
        float scaleX,
        float scaleY) {
      float scale, dx, dy;
      scale = scaleY;
      dx = parentRect.left + (parentRect.width() - childWidth * scale) * 0.5f;
      dy = parentRect.top;
      outTransform.setScale(scale, scale);
      outTransform.postTranslate((int) (dx + 0.5f), (int) (dy + 0.5f));
    }

    @Override
    public String toString() {
      return "fit_y";
    }
  }
}