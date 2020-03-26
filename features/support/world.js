const { setWorldConstructor } = require("cucumber");
//require("chromedriver");
const chrome = require("selenium-webdriver/chrome")

const inCircleCi = process.env.CI

const seleniumWebdriver = require("selenium-webdriver")

function customWorld() {

  const options = new chrome.Options()

  if (inCircleCi) {
    options.headless()
  }

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
