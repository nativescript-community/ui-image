package com.nativescript.image;

import androidx.annotation.NonNull;
import com.bumptech.glide.load.DataSource;
import com.bumptech.glide.request.RequestListener;
import com.bumptech.glide.request.target.Target;
import com.bumptech.glide.load.engine.GlideException;
import java.util.Arrays;
import java.util.List;

/**
 * Delegate multiple RequestListener instances via a single listener attach point.
 *
 * Usage:
 *   requestBuilder.listener(new CompositeRequestListener<>(saveKeysListener, otherListener));
 *
 * Behavior:
 * - Calls each delegate listener in order.
 * - If any delegate returns true, the composite returns true (short-circuit semantics for Glide).
 * - Exceptions from delegates are caught and logged so one bad listener doesn't break the others.
 */
public final class CompositeRequestListener<T> implements RequestListener<T> {
  private final List<RequestListener<T>> delegates;

  @SafeVarargs
  public CompositeRequestListener(@NonNull RequestListener<T>... listeners) {
    this.delegates = Arrays.asList(listeners);
  }

  @Override
  public boolean onLoadFailed(GlideException e, Object model, Target<T> target, boolean isFirstResource) {
    boolean handled = false;
    for (RequestListener<T> l : delegates) {
      if (l == null) continue;
      try {
        handled |= l.onLoadFailed(e, model, target, isFirstResource);
      } catch (Throwable t) {
        // swallow/log so one faulty listener doesn't break everything
        t.printStackTrace();
      }
    }
    return handled;
  }

  @Override
  public boolean onResourceReady(T resource, Object model, Target<T> target, DataSource dataSource, boolean isFirstResource) {
    boolean handled = false;
    for (RequestListener<T> l : delegates) {
      if (l == null) continue;
      try {
        handled |= l.onResourceReady(resource, model, target, dataSource, isFirstResource);
      } catch (Throwable t) {
        t.printStackTrace();
      }
    }
    return handled;
  }
}