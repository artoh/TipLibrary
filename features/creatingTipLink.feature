Feature: As a user I want to be able to create and view a tip link

  Scenario: user can create a new tip with link
    Given I am on the front page
    And add title field is clicked 
    When an "URL address" is entered to the add tip link field
    And Button + is pressed
    Then a tip with the link "URL address" is shown

