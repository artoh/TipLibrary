Feature: As a user I want to be able to edit the tip link

  Scenario: user can edit a link
    Given I am on the front page
    And tip list box is clicked
    When edit button is clicked
    And an "URL address" is written to the edit link field
    And the save button is pressed
    Then the link of the tip should be the "URL-address"
  
