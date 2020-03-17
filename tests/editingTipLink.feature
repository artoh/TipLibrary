Feature: As a user I want to be able to edit the tip link

  Scenario: user can edit an empty link
    Given tip list box is clicked
    And the link is empty
    When edit button is clicked
    Then the link should contain a URL-address
  
  Scenario: user can edit an existing link
    Given tip list box is clicked
    And the link is not empty
    When edit button is clicked
    Then the link should contain a URL-address
