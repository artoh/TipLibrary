Feature: As a user I want to be able to create the tip link

  Scenario: user can create a new tip link
    Given I am on the front page
    And add tip link is clicked
    When tip link is entered
    Then the link should contain a "URL-address"

  Scenario: user can see entered tip link
    Given I am on the front page
    And tip list box is clicked
    When tip link is entered
    Then the browser shows a "URL-address" in the tip link
