package com.ginni.bot.web.helpers;
import com.ginni.bot.web.utility.ExcelReader;
import com.ginni.bot.web.utility.GenerateWord;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.HashMap;
import java.util.List;

public class PageBase {
    public static final String AndroidVersion = "10";
    public static GenerateWord generateWord = new GenerateWord();
    public static AppiumDriver<MobileElement> driver;

    private static final String EXCEL_APK = "excel/DocExel.xlsx";
    private static final String LOGIN_APK = "LoginExitosoMM";

    private static final String FILE_TEST_CASES_DATA = "excel/DocExel.xlsx";
    private static final String SHEET_TEST_CASES_DATA = "LoginExitosoMM";

    private WebDriverWait wait;

    public PageBase() {
        this.driver = Hook.getDriver();
        WebDriverWait wait = new WebDriverWait(this.driver, 60);
    }

    protected static List<HashMap<String, String>> getData1() throws Throwable {
        return ExcelReader.data(EXCEL_APK, LOGIN_APK);
    }
    protected static List<HashMap<String, String>> getTestData() throws Throwable {
        return ExcelReader.data(EXCEL_APK, LOGIN_APK);
    }

    protected static HashMap<String, String> findRow(String columnNameKey, String columKeyValue) throws Throwable {
        Boolean found = false;
        List<HashMap<String, String>> rows          = ExcelReader.data(FILE_TEST_CASES_DATA, SHEET_TEST_CASES_DATA);
        HashMap<String, String> rowFound            = new HashMap<String, String>();

        for(int i=0; i<rows.size() && !found ;i++) {
            if (rows.get(i).get(columnNameKey).toString().equals(columKeyValue)) {
                rowFound = rows.get(i);
                found = true;
            }
        }
        return rowFound;
    }

    public static void wait(int milliSeconds){
        try {
            Thread.sleep(milliSeconds);
        } catch (InterruptedException e){
            e.printStackTrace();
        }
    }

}