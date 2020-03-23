const { Given, When, Then, After, Before } = require("cucumber");
const { By, Key } = require("selenium-webdriver");
const { expect } = require("chai");

let browser = null;

Before(async function () { browser = await this.puppeteer.launch({headless: false}) })
After (async function () { await browser.close()})
Given("I am on the front page", async function () {

  
  const page = await browser.newPage()
  await page.goto("localhost:3001")
  //this.driver.get("localhost:3001");
});

When("edit button is clicked", function() {
  editButton = this.waitForElement(By.name("edit"));
  editButton.click();
});

When("{string} is written to the edit title field", function(string) {
  titleField = this.waitForElement(By.name("title"));
  titleField.sendKeys(string);
});

Then("a tip with {string} as title is shown", function(string) {
  tip = this.waitForElement(By.className("tip"));
  tip.getText().then(text => {
    expect(text).to.contain(string);
  });
});

When("Button + is pressed", function() {
  button = this.waitForElement(By.name("create"));
  button.click();
  this.driver.sleep(3000);
});

When("the save button is pressed", function() {
  saveButton = this.waitForElement(By.name("save"));
  saveButton.click();
  this.driver.sleep(3000);
});

When("an {string} is written to edit link field", function(string) {
  linkFields = this.waitForElements(By.name("link"));
  linkFields[2].sendKeys(string);
});

Then("the link of the tip should be the {string}", function(string) {
  tip = this.waitForElement(By.className("tip"));
  tip.getText().then(text => {
    expect(text).to.contain(string);
  });
});

Then("the title of the tip should be {string}", async function(string) {
  tips = await this.waitForElements(By.className("tip"));
  const tip = tips.pop();
  tip.getText().then(text => {
    expect(text).to.contain(string);
  });
});

When("{string} is written in the add title field", function(string) {
  titleField = this.waitForElement(By.name("title"));
  titleField.sendKeys(string);
});

Then("a tip with the link {string} is shown", async function(string) {
  tip = this.waitForElement(By.className("tip"));
  tip.getText().then(text => {
    expect(text).to.contain(string);
  });
});

When("an {string} is entered to the add tip link field", function(string) {
  titleField = this.waitForElement(By.name("link"));
  titleField.sendKeys(string);
});

Given("add title field is clicked", function() {
  titleField = this.waitForElement(By.name("title"));
  titleField.click();
});

When(
  "the link is modified to be {string} in the edit link field",
  async function(string) {
    //linkField = this.waitForElement(By.id("editLink"));
    this.driver.sleep(2000);
    const linkFields = await this.driver.findElements(By.name("title"));
    this.driver.sleep(2000);
    const linkField = linkFields.pop();

    linkField.sendKeys(
      Key.BACK_SPACE,
      Key.BACK_SPACE,
      Key.BACK_SPACE,
      Key.BACK_SPACE,
      string
    );
  }
);

When("{string} is written in the edit title field", function(string) {
  titleField = this.waitForElement(By.name("title"));
  titleField.sendKeys(
    Key.BACK_SPACE,
    Key.BACK_SPACE,
    Key.BACK_SPACE,
    Key.BACK_SPACE,
    Key.BACK_SPACE,
    string
  );
});

Given("a tip exists", function() {
  titleField = this.waitForElement(By.name("title"));
  titleField.click();
  titleField.sendKeys("title");

  linkField = this.waitForElement(By.name("link"));
  linkField.click();
  linkField.sendKeys("link");

  button = this.waitForElement(By.name("create"));
  button.click();
});
