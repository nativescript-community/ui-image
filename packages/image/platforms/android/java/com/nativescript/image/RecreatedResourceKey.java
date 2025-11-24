package com.nativescript.image;

import androidx.annotation.NonNull;
import com.bumptech.glide.load.Key;
import java.nio.ByteBuffer;
import java.security.MessageDigest;
import java.util.Objects;

/**
 * Recreates ResourceCacheKey updateDiskCacheKey ordering but accepts
 * precomputed transformation
 * and options key bytes. This avoids the need to reconstruct
 * Transformation/Options objects.
 *
 * Ordering mirrors Glide's ResourceCacheKey:
 * signature.updateDiskCacheKey(md)
 * sourceKey.updateDiskCacheKey(md)
 * md.update(dimensions)
 * md.update(transformationKeyBytes) -- if present
 * md.update(optionsKeyBytes) -- if present
 * md.update(decodedResourceClass.getName().getBytes(...))
 */
public final class RecreatedResourceKey implements Key {
  private final Key sourceKey;
  private final Key signature;
  private final int width;
  private final int height;
  private final byte[] transformationKeyBytes; // may be null
  private final Class<?> decodedResourceClass;
  private final byte[] optionsKeyBytes; // may be null

  public RecreatedResourceKey(
      Key sourceKey,
      Key signature,
      int width,
      int height,
      byte[] transformationKeyBytes,
      Class<?> decodedResourceClass,
      byte[] optionsKeyBytes) {
    this.sourceKey = Objects.requireNonNull(sourceKey);
    this.signature = Objects.requireNonNull(signature);
    this.width = width;
    this.height = height;
    this.transformationKeyBytes = transformationKeyBytes;
    this.decodedResourceClass = Objects.requireNonNull(decodedResourceClass);
    this.optionsKeyBytes = optionsKeyBytes;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o)
      return true;
    if (!(o instanceof RecreatedResourceKey))
      return false;
    RecreatedResourceKey that = (RecreatedResourceKey) o;
    return width == that.width
        && height == that.height
        && sourceKey.equals(that.sourceKey)
        && signature.equals(that.signature)
        && java.util.Arrays.equals(transformationKeyBytes, that.transformationKeyBytes)
        && decodedResourceClass.equals(that.decodedResourceClass)
        && java.util.Arrays.equals(optionsKeyBytes, that.optionsKeyBytes);
  }

  @Override
  public int hashCode() {
    int result = sourceKey.hashCode();
    result = 31 * result + signature.hashCode();
    result = 31 * result + width;
    result = 31 * result + height;
    result = 31 * result + java.util.Arrays.hashCode(transformationKeyBytes);
    result = 31 * result + decodedResourceClass.hashCode();
    result = 31 * result + java.util.Arrays.hashCode(optionsKeyBytes);
    return result;
  }

  @Override
  public void updateDiskCacheKey(@NonNull MessageDigest messageDigest) {
    byte[] dimensions = ByteBuffer.allocate(8).putInt(width).putInt(height).array();

    signature.updateDiskCacheKey(messageDigest);
    sourceKey.updateDiskCacheKey(messageDigest);
    messageDigest.update(dimensions);

    if (transformationKeyBytes != null) {
      messageDigest.update(transformationKeyBytes);
    }

    if (optionsKeyBytes != null) {
      messageDigest.update(optionsKeyBytes);
    }

    messageDigest.update(decodedResourceClass.getName().getBytes(CHARSET));
  }
}