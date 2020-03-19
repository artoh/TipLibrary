Feature: As a user I want to be able to edit the tip title

  Scenario: user can edit an empty title
    Given I am on the front page
    And tip list box is clicked
    And the title is empty
    When edit button is clicked
    Then the title should contain a "String"
  
  Scenario: user can edit an existing title
    Given I am on the front page
    And tip list box is clicked
    And the title is not empty
    When edit button is clicked
    Then the title should contain a "String"

  Scenario: user can see entered tip title
    Given I am on the front page
    And tip list box is clicked
    When tip title is entered
    Then the browser shows a "String" in the tip title

  Scenario: user can see "Donald Duck" as tip title
    Given I am on the front page
    And tip list box is clicked
    And edit button is clicked
    When "Donald Duck" is written in the title field
    And Button + is pressed
    Then a tip with "Donald Duck" as title is shown
