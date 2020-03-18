Feature: As a user I want to be able to edit the tip description

  Scenario: user can edit an empty description
    Given I am on the front page
    And tip list box is clicked
    And the description is empty
    When edit button is clicked
    Then the description should contain a "text-element"
  
  Scenario: user can edit an existing description
    Given I am on the front page
    And tip list box is clicked
    And the description is not empty
    When edit button is clicked
    Then the description should contain a "text-element"

  Scenario: user can see entered tip description
    Given I am on the front page
    And tip list box is clicked
    When tip description is entered
    Then the browser shows a "text-element" in the tip description
