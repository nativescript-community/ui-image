package com.nativescript.image;

import android.util.Log;
import com.bumptech.glide.load.Options;
import com.bumptech.glide.request.RequestOptions;
import java.lang.reflect.Field;
import java.lang.reflect.Method;

/**
 * Utility to extract com.bumptech.glide.load.Options from a RequestOptions
 * instance via reflection.
 *
 * Behavior:
 * - Try public RequestOptions.getOptions() if present (cached).
 * - Otherwise try to find a private 'options' field on RequestOptions or its
 * superclasses (cached).
 * - If neither is found, return new Options() and log a single warning
 * (subsequent calls won't re-log lookup failures).
 *
 * Notes:
 * - Reflection is fragile across Glide versions and with R8/ProGuard. This
 * class logs failures and falls back safely.
 */
public final class ExtractRequestOptions {
  private static final String TAG = "ExtractRequestOptions";

  // Cached reflective handles and lookup state
  private static volatile Method cachedGetOptionsMethod;
  private static volatile Field cachedOptionsField;
  private static volatile boolean triedMethodLookup = false;
  private static volatile boolean triedFieldLookup = false;

  private ExtractRequestOptions() {
  }

  /**
   * Extracts the internal Options from a RequestOptions instance.
   * This method is fast after the first call because it caches reflective
   * handles.
   */
  public static Options getFrom(RequestOptions requestOptions) {
    if (requestOptions == null) {
      return new Options();
    }

    // 2) Try cached field lookup if method didn't yield a result
    Field f = cachedOptionsField;
    if (f == null && !triedFieldLookup) {
      synchronized (ExtractRequestOptions.class) {
        if (!triedFieldLookup) {
          triedFieldLookup = true;
          Class<?> cls = requestOptions.getClass();
          while (cls != null && cls != Object.class) {
            try {
              Field optionsField = cls.getDeclaredField("options");
              if (optionsField != null) {
                optionsField.setAccessible(true);
                cachedOptionsField = optionsField;
                f = optionsField;
                break;
              }
            } catch (NoSuchFieldException nsf) {
              // try superclass
              cls = cls.getSuperclass();
            } catch (Throwable t) {
              Log.w(TAG, "Failed to access 'options' field via reflection", t);
              break;
            }
          }
          if (f == null) {
            Log.w(TAG, "Could not find 'options' field on RequestOptions (will fall back to new Options()).");
          }
        } else {
          f = cachedOptionsField;
        }
      }
    }

    if (f != null) {
      try {
        Object value = f.get(requestOptions);
        if (value instanceof Options) {
          return (Options) value;
        } else {
          Log.w(TAG, "Found 'options' field but it's not an Options instance: "
              + (value == null ? "null" : value.getClass().getName()));
        }
      } catch (Throwable t) {
        Log.w(TAG, "Reading cached 'options' field failed; falling back to new Options()", t);
      }
    }
    // 3) Final fallback: return new Options() and warn (only logged during the
    // first failed lookups)
    return new Options();
  }

  /**
   * Optional: clear cached reflective handles. Useful for tests or if you load
   * different Glide versions at runtime.
   */
  public static void clearCache() {
    synchronized (ExtractRequestOptions.class) {
      cachedGetOptionsMethod = null;
      cachedOptionsField = null;
      triedMethodLookup = false;
      triedFieldLookup = false;
    }
  }
}