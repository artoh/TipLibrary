const { setWorldConstructor } = require("cucumber");
require("chromedriver");
const seleniumWebdriver = require("selenium-webdriver")
const chrome = require("selenium-webdriver/chrome");
const chromium = require("chromium")

function customWorld() {

  const options = new chrome.Options()
  options.setChromeBinaryPath(chromium.path)
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
