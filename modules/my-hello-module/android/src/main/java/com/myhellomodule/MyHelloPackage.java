package com.myhellomodule;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.uimanager.ViewManager;

import java.util.Collections;
import java.util.List;
import java.util.ArrayList;

import android.app.Application;

public class MyHelloPackage implements ReactPackage {
    @Override
    public List<NativeModule> createNativeModules(
        com.facebook.react.bridge.ReactApplicationContext reactContext
    ) {
        List<NativeModule> modules = new ArrayList<>();
        modules.add(new MyHelloModule(reactContext));
        return modules;
    }

    @Override
    public List<ViewManager> createViewManagers(
        com.facebook.react.bridge.ReactApplicationContext reactContext
    ) {
        return Collections.emptyList();
    }
}
