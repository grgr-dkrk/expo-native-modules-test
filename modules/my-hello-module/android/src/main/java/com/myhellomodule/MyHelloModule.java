package com.myhellomodule;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import com.facebook.react.bridge.Promise;

public class MyHelloModule extends ReactContextBaseJavaModule {
    public MyHelloModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "MyHelloModule";
    }

    @ReactMethod
    public void getHello(Promise promise) {
        promise.resolve("Hello World from Native!");
    }
}
