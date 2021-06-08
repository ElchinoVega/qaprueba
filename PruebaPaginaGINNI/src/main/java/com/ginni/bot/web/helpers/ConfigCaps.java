package com.ginni.bot.web.helpers;

import io.appium.java_client.remote.MobileCapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;

import java.net.MalformedURLException;
import java.net.URL;

public class ConfigCaps {

    static String url = "https://qa-ginni.pandero.com.pe/";

    public static final URL appiumServerUrl(){
        try{
            return new URL(url);
        }catch(MalformedURLException e){
            e.printStackTrace();
        }
        return null;
    }

    public static final DesiredCapabilities Android_Standard(){
        DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability(MobileCapabilityType.PLATFORM_NAME, "Android");
        capabilities.setCapability(MobileCapabilityType.PLATFORM_VERSION, "10.0");
        capabilities.setCapability(MobileCapabilityType.DEVICE_NAME,"emulator-5554");
        capabilities.setCapability(MobileCapabilityType.BROWSER_NAME,"URL");


        return capabilities;
    }

}
