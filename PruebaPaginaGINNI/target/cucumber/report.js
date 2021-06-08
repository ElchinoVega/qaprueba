$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AUTENTICACION_LOGIN.feature");
formatter.feature({
  "line": 3,
  "name": "Validacion del flujo de logeo en la app convergente",
  "description": "",
  "id": "validacion-del-flujo-de-logeo-en-la-app-convergente",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@RegressionTestAutenticacion"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Cliente se logea en la app ingresando su DNI y contrasenia correcta",
  "description": "",
  "id": "validacion-del-flujo-de-logeo-en-la-app-convergente;cliente-se-logea-en-la-app-ingresando-su-dni-y-contrasenia-correcta",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@RegressionTest"
    },
    {
      "line": 8,
      "name": "@LogeoUsuarioContraseniaCorrectaDNI"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "El cliente selecciona el tipo de documento \u003csegunIdCasoDePrueba\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "El cliente ingresa su numero de documento y contrasenia \u003csegunIdCasoDePrueba\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "El cliente da click en el boton ingresar",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "La app muestra el home con el nombre del cliente \u003csegunIdCasoDePrueba\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "validacion-del-flujo-de-logeo-en-la-app-convergente;cliente-se-logea-en-la-app-ingresando-su-dni-y-contrasenia-correcta;",
  "rows": [
    {
      "cells": [
        "segunIdCasoDePrueba"
      ],
      "line": 15,
      "id": "validacion-del-flujo-de-logeo-en-la-app-convergente;cliente-se-logea-en-la-app-ingresando-su-dni-y-contrasenia-correcta;;1"
    },
    {
      "cells": [
        "3"
      ],
      "line": 16,
      "id": "validacion-del-flujo-de-logeo-en-la-app-convergente;cliente-se-logea-en-la-app-ingresando-su-dni-y-contrasenia-correcta;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 583882500,
  "status": "passed"
});
formatter.before({
  "duration": 33340843900,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Unable to create a new remote session. Please check the server log for more details. Original error: An unknown server-side error occurred while processing the command. Original error: Error executing adbExec. Original error: \u0027Command \u0027C:\\\\Users\\\\Jair\\\\AppData\\\\Local\\\\Android\\\\Sdk\\\\platform-tools\\\\adb.exe -P 5037 -s emulator-5554 shell pm clear tdp.app.col\u0027 timed out after 20000ms\u0027. Try to increase the 20000ms adb execution timeout represented by \u0027adbExecTimeout\u0027 capability\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOPJAIR\u0027, ip: \u0027192.168.10.88\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: driver.version: AppiumDriver\nremote stacktrace: UnknownError: An unknown server-side error occurred while processing the command. Original error: Error executing adbExec. Original error: \u0027Command \u0027C:\\\\Users\\\\Jair\\\\AppData\\\\Local\\\\Android\\\\Sdk\\\\platform-tools\\\\adb.exe -P 5037 -s emulator-5554 shell pm clear tdp.app.col\u0027 timed out after 20000ms\u0027. Try to increase the 20000ms adb execution timeout represented by \u0027adbExecTimeout\u0027 capability\n    at getResponseForW3CError (C:\\Users\\Jair\\AppData\\Local\\Programs\\Appium\\resources\\app\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\protocol\\errors.js:804:9)\n    at asyncHandler (C:\\Users\\Jair\\AppData\\Local\\Programs\\Appium\\resources\\app\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\protocol\\protocol.js:380:37)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOPJAIR\u0027, ip: \u0027192.168.10.88\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: driver.version: AppiumDriver\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor$1.createSession(AppiumCommandExecutor.java:208)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.createSession(AppiumCommandExecutor.java:217)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.\u003cinit\u003e(DefaultGenericMobileDriver.java:38)\r\n\tat io.appium.java_client.AppiumDriver.\u003cinit\u003e(AppiumDriver.java:84)\r\n\tat io.appium.java_client.AppiumDriver.\u003cinit\u003e(AppiumDriver.java:94)\r\n\tat com.tsoft.bot.frontend.helpers.Hook.setUpAppium(Hook.java:28)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:104)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:645)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:851)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1177)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:756)\r\n\tat org.testng.TestRunner.run(TestRunner.java:610)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:387)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:382)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1293)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1218)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1133)\r\n\tat org.testng.TestNG.run(TestNG.java:1104)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor$1.createSession(AppiumCommandExecutor.java:186)\r\n\t... 51 more\r\nCaused by: org.openqa.selenium.WebDriverException: An unknown server-side error occurred while processing the command. Original error: Error executing adbExec. Original error: \u0027Command \u0027C:\\\\Users\\\\Jair\\\\AppData\\\\Local\\\\Android\\\\Sdk\\\\platform-tools\\\\adb.exe -P 5037 -s emulator-5554 shell pm clear tdp.app.col\u0027 timed out after 20000ms\u0027. Try to increase the 20000ms adb execution timeout represented by \u0027adbExecTimeout\u0027 capability\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOPJAIR\u0027, ip: \u0027192.168.10.88\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: driver.version: AppiumDriver\nremote stacktrace: UnknownError: An unknown server-side error occurred while processing the command. Original error: Error executing adbExec. Original error: \u0027Command \u0027C:\\\\Users\\\\Jair\\\\AppData\\\\Local\\\\Android\\\\Sdk\\\\platform-tools\\\\adb.exe -P 5037 -s emulator-5554 shell pm clear tdp.app.col\u0027 timed out after 20000ms\u0027. Try to increase the 20000ms adb execution timeout represented by \u0027adbExecTimeout\u0027 capability\n    at getResponseForW3CError (C:\\Users\\Jair\\AppData\\Local\\Programs\\Appium\\resources\\app\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\protocol\\errors.js:804:9)\n    at asyncHandler (C:\\Users\\Jair\\AppData\\Local\\Programs\\Appium\\resources\\app\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\protocol\\protocol.js:380:37)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\t... 56 more\r\n",
  "status": "failed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "El cliente se encuentra en la pantalla de ingreso",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "El cliente da click en el boton empezar ahora",
  "keyword": "When "
});
formatter.match({
  "location": "StepsLoginExitoso.el_cliente_se_encuentra_en_la_pantalla_de_ingreso()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepsLoginExitoso.el_cliente_da_click_en_el_boton_empezar_ahora()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "Cliente se logea en la app ingresando su DNI y contrasenia correcta",
  "description": "",
  "id": "validacion-del-flujo-de-logeo-en-la-app-convergente;cliente-se-logea-en-la-app-ingresando-su-dni-y-contrasenia-correcta;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@RegressionTestAutenticacion"
    },
    {
      "line": 8,
      "name": "@RegressionTest"
    },
    {
      "line": 8,
      "name": "@LogeoUsuarioContraseniaCorrectaDNI"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "El cliente selecciona el tipo de documento 3",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "El cliente ingresa su numero de documento y contrasenia 3",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "El cliente da click en el boton ingresar",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "La app muestra el home con el nombre del cliente 3",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 43
    }
  ],
  "location": "StepsLoginExitoso.el_cliente_selecciona_el_tipo_de_documento(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 56
    }
  ],
  "location": "StepsLoginExitoso.el_cliente_ingresa_su_numero_de_documento_y_contrasenia(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepsLoginExitoso.el_cliente_da_click_en_el_boton_ingresar()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 49
    }
  ],
  "location": "StepsLoginExitoso.la_app_muestra_el_home_con_el_nombre_del_cliente(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 135700,
  "error_message": "java.lang.NullPointerException\r\n\tat com.tsoft.bot.frontend.helpers.Hook.tearDown(Hook.java:35)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:104)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:645)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:851)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1177)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:756)\r\n\tat org.testng.TestRunner.run(TestRunner.java:610)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:387)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:382)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1293)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1218)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1133)\r\n\tat org.testng.TestNG.run(TestNG.java:1104)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Cliente se logea en la app ingresando su CEX y contrasenia correcta",
  "description": "",
  "id": "validacion-del-flujo-de-logeo-en-la-app-convergente;cliente-se-logea-en-la-app-ingresando-su-cex-y-contrasenia-correcta",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@RegressionTest"
    },
    {
      "line": 17,
      "name": "@LogeoUsuarioContraseniaCorrectaCEX"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "El cliente selecciona el tipo de documento \u003csegunIdCasoDePrueba\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "El cliente ingresa su numero de documento y contrasenia \u003csegunIdCasoDePrueba\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "El cliente da click en el boton ingresar",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "La app muestra el home con el nombre del cliente \u003csegunIdCasoDePrueba\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "validacion-del-flujo-de-logeo-en-la-app-convergente;cliente-se-logea-en-la-app-ingresando-su-cex-y-contrasenia-correcta;",
  "rows": [
    {
      "cells": [
        "segunIdCasoDePrueba"
      ],
      "line": 24,
      "id": "validacion-del-flujo-de-logeo-en-la-app-convergente;cliente-se-logea-en-la-app-ingresando-su-cex-y-contrasenia-correcta;;1"
    },
    {
      "cells": [
        "8"
      ],
      "line": 25,
      "id": "validacion-del-flujo-de-logeo-en-la-app-convergente;cliente-se-logea-en-la-app-ingresando-su-cex-y-contrasenia-correcta;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 552500,
  "status": "passed"
});
