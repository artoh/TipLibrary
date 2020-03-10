const { Given, When, Then} = require("cucumber")
const {expect } = require("chai")

Given('I am on the front page', function () {

    this.driver.get("localhost:3001")

  });



