package com.nativescript.image;

import android.graphics.Matrix;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.TransitionDrawable;
import android.widget.ImageView;
import androidx.annotation.NonNull;
import com.bumptech.glide.request.transition.Transition;

public class MatrixPreservingCrossFadeTransition implements Transition<Drawable> {
    private final int duration;
    
    public MatrixPreservingCrossFadeTransition(int duration) {
        this.duration = duration;
    }
    
    @Override
    public boolean transition(@NonNull Drawable current, @NonNull ViewAdapter adapter) {
        Drawable previous = adapter.getCurrentDrawable();
        if (previous == null) {
            return false;
        }
        
        // Get the ImageView from the adapter
        ImageView view = null;
        if (adapter instanceof com.bumptech.glide.request.target.ViewTarget) {
            view = (ImageView) ((com.bumptech.glide.request.target.ViewTarget<?, ?>) adapter).getView();
        }
        
        // Wrap current in MatrixDrawable with computed matrix if we have a MatrixImageView
        Drawable wrappedCurrent;
        if (view instanceof MatrixImageView) {
            MatrixImageView miv = (MatrixImageView) view;
            if (current instanceof MatrixDrawable) {
                wrappedCurrent = ((MatrixDrawable) current);
            } else {
                wrappedCurrent = new MatrixDrawable(current);
            }
            Matrix matrix = miv.computeMatrixForDrawable((MatrixDrawable)wrappedCurrent);
            ((MatrixDrawable)wrappedCurrent).setMatrix(matrix);
        } else {
            wrappedCurrent = current;
        }
        
        // Create TransitionDrawable
        final TransitionDrawable td = new TransitionDrawable(new Drawable[] { previous, wrappedCurrent });
        td.setCrossFadeEnabled(true);
        
        // Set the TransitionDrawable - MatrixImageView will handle it specially
        adapter.setDrawable(td);
        
        // After transition completes, set the final MatrixDrawable
        // final MatrixDrawable finalDrawable = (MatrixDrawable)wrappedCurrent;
        // if (view instanceof MatrixImageView) {
        //     view.postDelayed(new Runnable() {
        //         @Override
        //         public void run() {
        //             adapter.setDrawable(finalDrawable);
        //         }
        //     }, duration);
        // }
        
        td.startTransition(duration);
        return true;
    }
}