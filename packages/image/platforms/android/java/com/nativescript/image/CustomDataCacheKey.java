package com.nativescript.image;

import androidx.annotation.NonNull;
import com.bumptech.glide.load.Key;
import java.security.MessageDigest;
import java.util.Objects;

/**
 * A cache key for original source data + any requested signature.
 * This mimics Glide's internal DataCacheKey structure to enable proper disk cache lookups.
 * 
 * Based on Glide's DataCacheKey which follows this exact order:
 * 1. sourceKey.updateDiskCacheKey(messageDigest)
 * 2. signature.updateDiskCacheKey(messageDigest)
 */
final class CustomDataCacheKey implements Key {

  private final Key sourceKey;
  private final Key signature;

  CustomDataCacheKey(Key sourceKey, Key signature) {
    this.sourceKey = Objects.requireNonNull(sourceKey, "sourceKey must not be null");
    this.signature = Objects.requireNonNull(signature, "signature must not be null");
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
    // CRITICAL: Match Glide's DataCacheKey exact order
    // From Glide source: DataCacheKey updates sourceKey first, then signature
    sourceKey.updateDiskCacheKey(messageDigest);
    signature.updateDiskCacheKey(messageDigest);
  }
}