Feature: As a user I want to be able to create the tip title

  Scenario: user can create a new tip title
    Given I am on the front page
    When add title field is clicked 
    And "Donald Duck" is written in the add title field
    And Button + is pressed
    Then a tip with "Donald Duck" as title is shown
