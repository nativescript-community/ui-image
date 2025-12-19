package com.nativescript.image;

import androidx.annotation.NonNull;
import com.bumptech.glide.load.Key;
import java.security.MessageDigest;

/** A cache key for original source data + any requested signature. */
final class CustomDataCacheKey implements Key {

  private final Key sourceKey;
  private final Key signature;

  CustomDataCacheKey(Key sourceKey, Key signature) {
    this.sourceKey = sourceKey;
    this.signature = signature;
  }

  Key getSourceKey() {
    return sourceKey;
  }

  @Override
  public boolean equals(Object o) {
    if (o instanceof CustomDataCacheKey) {
      CustomDataCacheKey other = (CustomDataCacheKey) o;
      return sourceKey.equals(other.sourceKey) && signature.equals(other.signature);
    }
    return false;
  }

  @Override
  public int hashCode() {
    int result = sourceKey.hashCode();
    result = 31 * result + signature.hashCode();
    return result;
  }

  @Override
  public String toString() {
    return "CustomDataCacheKey{" + "sourceKey=" + sourceKey + ", signature=" + signature + '}';
  }

  @Override
  public void updateDiskCacheKey(@NonNull MessageDigest messageDigest) {
    sourceKey.updateDiskCacheKey(messageDigest);
    signature.updateDiskCacheKey(messageDigest);
  }
}