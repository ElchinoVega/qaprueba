package com.ginni.bot.web.runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import org.testng.annotations.Test;


@CucumberOptions(
		features={"src//main//resources//features"},
		glue={"com.ginni.bot.web.helpers",
				"com.tsoft.bot.web.steps"},
		plugin = {"pretty", "html:target/cucumber"},
		tags = {"@ValidarRestablecerContrasenaLogin"},
		monochrome = true
	)

@Test
public class RunTest extends AbstractTestNGCucumberTests{

}
