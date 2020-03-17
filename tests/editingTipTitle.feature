Feature: As a user I want to be able to edit the tip title

  Scenario: user can edit an empty title
    Given tip list box is clicked
    And the title is empty
    When edit button is clicked
    Then the title should contain a String
  
  Scenario: user can edit an existing title
    Given tip list box is clicked
    And the title is not empty
    When edit button is clicked
    Then the title should contain a String
