Feature: As a user I want to be able to create the tip link

  Scenario: user can create a new tip link
    Given add tip link is clicked
    When tip link is entered
    Then the link should contain a URL-address
