const { Given, When, Then } = require("cucumber");
const { By, Key } = require("selenium-webdriver");
const { expect } = require("chai");

Given("I am on the front page", async function() {
  await this.driver.get("localhost:3001");
});

When("edit button is clicked", async function() {
  editButtons = await this.waitForElements(By.name("edit"));
  editButton = editButtons.pop()
  await editButton.click();
});

When("{string} is written to the edit title field", function(string) {
  titleFields = this.waitForElements(By.name("title"));
  titleField = titleFields.pop()
  titleField.sendKeys(string);
});

Then("a tip with {string} as title is shown", async function(string) {

  tips = await this.waitForElements(By.className("tip"));
  tip = tips.pop()

  const text = await tip.getText();

  expect(text).to.contain(string);
});

When("Button + is pressed", async function() {
  button = this.waitForElement(By.name("create"));

  await button.click();
  this.driver.sleep(4000);
});

When("the save button is pressed", async function() {
  saveButton = this.waitForElement(By.name("save"));
  await saveButton.click();
  this.driver.sleep(4000);
});

When("an {string} is written to edit link field", async function(string) {
  linkFields = await this.waitForElements(By.name("link"));
  linkField = linkField.pop()
  linkField.sendKeys(string);
});

Then("the link of the tip should be the {string}", async function(string) {
  tips = await this.waitForElements(By.className("tip"));
  const tip = tips.pop()
  const text = await tip.getText();

  expect(text).to.contain(string);
});

Then("the title of the tip should be {string}", async function(string) {
  this.driver.sleep(4000)
  tips = await this.waitForElements(By.className("tip"));
  const tip = tips.pop();
  const text = await tip.getText();
  expect(text).to.contain(string);
});

When("{string} is written in the add title field", function(string) {
  titleField = this.waitForElement(By.name("title"));
  titleField.sendKeys(string);
});

Then("a tip with the link {string} is shown", async function(string) {
  tip = this.waitForElement(By.className("tip"));

  const text = await tip.getText();

  expect(text).to.contain(string);
});

When("an {string} is entered to the add tip link field", async function(string) {

  titleFields = await this.waitForElements(By.name("link"));
  titleField = titleFields.pop()
  await titleField.sendKeys(string);
});

Given("add title field is clicked", async function() {
  titleField = this.waitForElement(By.name("title"));
  await titleField.click();
});

When(
  "the link is modified to be {string} in the edit link field",
  async function(string) {
    //linkField = this.waitForElement(By.id("editLink"));
    this.driver.sleep(2000);
    const linkFields = await this.driver.findElements(By.name("link"));
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

When("{string} is written in the edit title field", async function(string) {
  titleFields = await this.waitForElements(By.name("title"));
  titleField = titleFields.pop()
  titleField.sendKeys(
    Key.BACK_SPACE,
    Key.BACK_SPACE,
    Key.BACK_SPACE,
    Key.BACK_SPACE,
    Key.BACK_SPACE,
    string
  );
});

Given("a tip exists", async function() {
  titleField = this.waitForElement(By.name("title"));
  await titleField.click();
  await titleField.sendKeys("title");

  linkField = this.waitForElement(By.name("link"));
  await linkField.click();
  await linkField.sendKeys("link");

  button = this.waitForElement(By.name("create"));
  await button.click();
});
