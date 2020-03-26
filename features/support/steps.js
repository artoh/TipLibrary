const { Given, When, Then } = require("cucumber")
const { By, Key } = require("selenium-webdriver")
const { expect } = require("chai")

Given("I am on the front page", function() {
  this.driver.get("localhost:3001")
})

When("edit button is clicked", async function() {
  editButtons = await this.waitForElements(By.name("edit"))
  await editButtons.pop().click()
})

When("{string} is written to the edit title field", function(string) {
  titleField = this.waitForElement(By.name("title"))
  titleField.sendKeys(string)
})

Then("a tip with {string} as title is shown", async function(string) {
  tip = this.waitForElement(By.className("tip"))

  const text = await tip.getText()

  expect(text).to.contain(string)
})

When("Button + is pressed", function() {
  button = this.waitForElement(By.name("create"))
  button.click()
  this.driver.sleep(3000)
})

When("the save button is pressed", async function() {
  saveButton = await this.waitForElements(By.name("save"))
  await saveButtons.pop().click()
  this.driver.sleep(3000)
})

When("an {string} is written to edit link field", function(string) {
  linkFields = this.waitForElements(By.name("link"))
  linkFields[2].sendKeys(string)
})

Then("the link of the tip should be the {string}", async function(string) {
  tip = this.waitForElement(By.className("tip"))

  const text = await tip.getText()

  expect(text).to.contain(string)
})

Then("the title of the tip should be {string}", async function(string) {
  tips = await this.waitForElements(By.className("tip"))
  const tip = tips.pop()
  const text = await tip.getText()
  expect(text).to.contain(string)
})

When("{string} is written in the add title field", function(string) {
  titleField = this.waitForElement(By.name("title"))
  titleField.sendKeys(string)
})

Then("a tip with the link {string} is shown", async function(string) {
  tip = this.waitForElement(By.className("tip"))

  const text = await tip.getText()

  expect(text).to.contain(string)
})

When("an {string} is entered to the add tip link field", function(string) {
  titleField = this.waitForElement(By.name("link"))
  titleField.sendKeys(string)
})

Given("add title field is clicked", function() {
  titleField = this.waitForElement(By.name("title"))
  titleField.click()
})

When(
  "the link is modified to be {string} in the edit link field",
  async function(string) {
    //linkField = this.waitForElement(By.id("editLink"));
    this.driver.sleep(2000)
    const linkFields = await this.driver.findElements(By.name("link"))
    this.driver.sleep(2000)
    const linkField = linkFields.pop()

    linkField.sendKeys(
      Key.BACK_SPACE,
      Key.BACK_SPACE,
      Key.BACK_SPACE,
      Key.BACK_SPACE,
      string
    )
  }
)

When("{string} is written in the edit title field", function(string) {
  titleField = this.waitForElement(By.name("title"))
  titleField.sendKeys(
    Key.BACK_SPACE,
    Key.BACK_SPACE,
    Key.BACK_SPACE,
    Key.BACK_SPACE,
    Key.BACK_SPACE,
    string
  )
})

Given("a tip exists", function() {
  titleField = this.waitForElement(By.name("title"))
  titleField.click()
  titleField.sendKeys("title")

  linkField = this.waitForElement(By.name("link"))
  linkField.click()
  linkField.sendKeys("link")

  button = this.waitForElement(By.name("create"))
  button.click()
})

When("{string} is entered to the add tag field", async function(string) {
  tagFields = await this.waitForElements(By.name("newtag"))
  this.driver.sleep(1000)
  await tagFields.pop().sendKeys(string)
})

When("Button AddTag is pressed", async function() {
  addTags = await this.waitForElements(By.name("addtag"))
  await addTags.pop().click()
})

When("Button More is pressed", async function() {
  moreButtons = await this.waitForElements(By.name("details"))
  await moreButtons.pop().click()
})

Then("a tip with the tag {string} is shown", async function(string) {
  this.driver.sleep(1000)
  tips = await this.waitForElements(By.className("tip"))
  text = await tips.pop().getText()
  expect(text).contain(string)
})

When("Button Save is pressed", async function() {
  savebuttons = await this.waitForElements(By.name("save"))
  await savebuttons.pop().click()
})

Given("a tip with tag {string} exists", async function(string) {
  titleField = this.waitForElement(By.name("title"))
  await titleField.click()

  tagField = await this.waitForElement(By.name("newtag"))
  await tagField.sendKeys(string)
  this.driver.sleep(1000)

  addTag = await this.waitForElement(By.name("addtag"))
  await addTag.click()
  this.driver.sleep(1000)

  button = await this.waitForElement(By.name("create"))
  await button.click()
})

When("removetag chip {string} is pressed", async function(string) {
  chip = await this.waitForElement(By.id("deletetag-" + string))
  dbutton = await chip.findElement(By.className("MuiSvgIcon-root"))
  await dbutton.click()
})

Then("a tip without the tag {string} is shown", async function(string) {
  this.driver.sleep(1000)
  tips = await this.waitForElements(By.className("tip"))
  text = await tips.pop().getText()
  expect(text).not.contain(string)
})

Then("a tip with tag {string} is shown", async function(string) {
  tips = await this.waitForElements(By.name("details"))
  let txt = ""
  for (i = 0; i < tips.length; i++) {
    await tips[i].click()
    txt = txt.concat(await tips[i].text)
  }

  expect(txt).contain(string)
})

When("tip chip {string} is clicked", async function(string) {
  chip = await this.waitForElement(By.id("filter_" + string))
  await chip.click()
})
