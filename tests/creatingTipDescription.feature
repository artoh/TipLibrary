Feature: As a user I want to be able to create the tip description

  Scenario: user can create a new tip description
    Given add tip description is clicked
    When tip description is entered
    Then the description should contain a text-element
