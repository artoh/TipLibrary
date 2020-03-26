const { setWorldConstructor } = require("cucumber");
//require("chromedriver");
const chrome = require("selenium-webdriver/chrome")

const seleniumWebdriver = require("selenium-webdriver")

function customWorld() {

  const options = new chrome.Options()

  options.headless()

  this.driver = new seleniumWebdriver.Builder().forBrowser("chrome").setChromeOptions(Option).build();

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
