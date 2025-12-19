package com.bumptech.glide.load.engine;

import com.bumptech.glide.load.Key;
import com.bumptech.glide.load.Options;
import com.bumptech.glide.load.Transformation;
import java.util.Map;
import android.util.Log;

/**
 * Public subclass of package-private EngineKeyFactory that notifies a listener
 * when an
 * EngineKey is created.
 */
public class CapturingEngineKeyFactory extends EngineKeyFactory {
  public interface Listener {
    void onEngineKeyCreated(Key engineKey, Object model);
  }

  private final Listener listener;

  public CapturingEngineKeyFactory(Listener listener) {
    this.listener = listener;
  }

  @SuppressWarnings({ "rawtypes", "unchecked" })
  @Override
  com.bumptech.glide.load.engine.EngineKey buildKey(
      Object model,
      Key signature,
      int width,
      int height,
      Map<Class<?>, Transformation<?>> transformations,
      Class<?> resourceClass,
      Class<?> transcodeClass,
      Options options) {
    Log.d("JS", "CapturingEngineKeyFactory buildKey " + model);
    com.bumptech.glide.load.engine.EngineKey engineKey = super.buildKey(model, signature, width, height,
        transformations, resourceClass, transcodeClass, options);
    if (listener != null) {
      listener.onEngineKeyCreated(engineKey, model);
    }
    return engineKey;
  }
}