Feature: As a user I want to be able to edit the tip link

  Scenario: user can edit an empty link
    Given I am on the front page
    And tip list box is clicked
    And the link is empty
    When edit button is clicked
    Then the link should contain a "URL-address"
  
  Scenario: user can edit an existing link
    Given I am on the front page
    And tip list box is clicked
    And the link is not empty
    When edit button is clicked
    Then the link should contain a "URL-address"

  Scenario: user can see entered tip link
    Given I am on the front page
    And tip list box is clicked
    When tip link is entered
    Then the browser shows a "URL-address" in the tip link
