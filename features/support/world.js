const { setWorldConstructor, setDefaultTimeout } = require("cucumber");
//require("chromedriver");
const chrome = require("selenium-webdriver/chrome")

const inCircleCi = process.env.CI

const seleniumWebdriver = require("selenium-webdriver")

setDefaultTimeout(6000)

function customWorld() {

  const options = new chrome.Options()

 // if (inCircleCi) {
//    options.headless()
    options.addArguments("disable-gpu")
    options.setChromeLogFile("chromelog")
    options.windowSize({width: 1200, height: 600})
 // }

  this.driver = new seleniumWebdriver.Builder().forBrowser("chrome").setChromeOptions(options).build();


  this.waitForElement = function(locator) {
    const condition = seleniumWebdriver.until.elementLocated(locator);
    return this.driver.wait(condition);
  };

  this.waitForElements = function(locator) {
    const condition = seleniumWebdriver.until.elementsLocated(locator);
    return this.driver.wait(condition);
  };
}

setWorldConstructor(customWorld);
