package com.nativescript.image;

import com.facebook.datasource.DataSource;

public class BaseDataSubscriber extends com.facebook.datasource.BaseDataSubscriber {
    private BaseDataSubscriberListener listener;

    public BaseDataSubscriber(BaseDataSubscriberListener listener) {
        super();
        this.listener = listener;
    }

    @Override
    public void onNewResultImpl(DataSource dataSource) {
        listener.onNewResult(dataSource);
    }

    @Override
    public void onFailureImpl(DataSource dataSource) {
        listener.onFailure(dataSource);
    }
}
