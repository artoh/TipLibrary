const {setWorldConstructor} = require("cucumber")
const seleniumWebdriver = require("selenium-webdriver")

function customWorld() {

    this.driver = new seleniumWebdriver.Builder()
        .forBrowser("chrome")
        .build()

    this.waitForElement = function(locator) {
        const condition = seleniumWebdriver.until.elementLocated(locator)
        return this.driver.wait(condition)
    }

}

setWorldConstructor(customWorld)
