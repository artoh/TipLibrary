const { setWorldConstructor } = require("cucumber");

const  puppeteer = require("puppeteer")


  function customWorld () {

  this.puppeteer = puppeteer;

  //this.driver = new seleniumWebdriver.Builder().forBrowser("chrome").build();

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
