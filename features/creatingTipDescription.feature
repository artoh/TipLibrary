Feature: As a user I want to be able to create the tip description

  Scenario: user can create a new tip description
    Given I am on the front page
    And add tip description is clicked
    When tip description is entered
    Then the description should contain a "text-element"

  Scenario: user can see entered tip description
    Given I am on the front page
    And tip list box is clicked
    When tip description is entered
    Then the browser shows a "text-element" in the tip description

  Scenario: user can see "Donald Duck video" as tip description
    Given I am on the front page
    And add tip description is clicked
    When "Donald Duck video" is written in the description field
    And Button + is pressed
    Then a tip with "Donald Duck video" as description is shown
