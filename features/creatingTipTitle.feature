Feature: As a user I want to be able to create the tip title

  Scenario: user can create a new tip title
    Given I am on the front page
    And add tip title is clicked
    When tip title is entered
    Then the title should contain a "String"

  Scenario: user can see entered tip title
    Given I am on the front page
    And tip list box is clicked
    When tip title is entered
    Then the browser shows a "String" in the tip title

  Scenario: user can see "Donald Duck" as tip title
    Given I am on the front page
    And add tip title is clicked
    When "Donald Duck" is written in the title field
    And Button + is pressed
    Then a tip with "Donald Duck" as title is shown
