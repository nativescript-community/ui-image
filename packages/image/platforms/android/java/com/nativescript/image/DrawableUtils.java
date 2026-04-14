package com.nativescript.image;

import android.content.Context;
import android.util.Log;
import android.net.Uri;
import android.graphics.drawable.Drawable;
import java.util.List;

public class DrawableUtils {
    public static Drawable tryLoadExternalDrawable(Context context, Uri uri) {
        try {
            String scheme = uri.getScheme();
            if (!"android.resource".equals(scheme)) return null;

            String pkg = uri.getHost();
            if (pkg == null || pkg.equals(context.getPackageName())) {
                return null; // let Fresco handle local ones
            }

            Context remoteCtx = context.createPackageContext(pkg, 0);

            // URI format: android.resource://pkg/drawable/name
            List<String> segments = uri.getPathSegments();
            if (segments.size() < 2) return null;

            String type = segments.get(0); // "drawable"
            String name = segments.get(1);

            int resId = remoteCtx.getResources().getIdentifier(name, type, pkg);
            if (resId == 0) return null;

            return remoteCtx.getDrawable(resId);

        } catch (Exception e) {
            Log.w("DraweeView", "External load failed: " + uri, e);
            return null;
        }
    }
}
