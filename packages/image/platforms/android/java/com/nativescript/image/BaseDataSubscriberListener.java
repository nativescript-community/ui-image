package com.nativescript.image;

import com.facebook.datasource.DataSource;

public interface BaseDataSubscriberListener {
    public void onNewResult(DataSource dataSource);

    public void onFailure(DataSource dataSource);
}