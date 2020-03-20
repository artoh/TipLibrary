Feature: As a user I want to be able to edit the tip title

  Scenario: user can edit a title
    Given I am on the front page
    And a tip exists
    When edit button is clicked
    And "Donald Duck magazine" is written in the edit title field
    And the save button is pressed
    Then the title of the tip should be "Donald Duck magazine"
  

