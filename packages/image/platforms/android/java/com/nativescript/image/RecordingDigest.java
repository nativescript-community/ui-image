package com.nativescript.image;

import java.io.ByteArrayOutputStream;
import java.security.MessageDigest;

/**
 * Small MessageDigest that records raw bytes passed to update(...).
 * We don't compute a digest here: we simply capture the bytes that callers
 * write by calling
 * update(byte[]) so we can later replay them into another MessageDigest.
 *
 * Usage:
 * RecordingDigest r = new RecordingDigest();
 * transformation.updateDiskCacheKey(r);
 * byte[] bytes = r.digest(); // returns the concatenated bytes that
 * transformation wrote
 */
public final class RecordingDigest extends MessageDigest {
  private final ByteArrayOutputStream out = new ByteArrayOutputStream();

  public RecordingDigest() {
    // algorithm name is arbitrary here; we do not rely on MessageDigest's actual
    // hashing.
    super("NONE");
  }

  @Override
  protected void engineUpdate(byte input) {
    out.write(input);
  }

  @Override
  protected void engineUpdate(byte[] input, int offset, int len) {
    out.write(input, offset, len);
  }

  @Override
  protected byte[] engineDigest() {
    byte[] result = out.toByteArray();
    out.reset();
    return result;
  }

  @Override
  protected void engineReset() {
    out.reset();
  }
}