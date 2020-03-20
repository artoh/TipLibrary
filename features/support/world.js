const { setWorldConstructor } = require("cucumber");
require("chromedriver");
const seleniumWebdriver = require("selenium-webdriver");

function customWorld() {
  this.driver = new seleniumWebdriver.Builder().forBrowser("chrome").build();

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
