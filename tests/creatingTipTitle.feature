Feature: As a user I want to be able to create the tip title

  Scenario: user can create a new tip title
    Given add tip title is clicked
    When tip title is entered
    Then the title should contain a String
