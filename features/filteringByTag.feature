Feature: As a user I want to be able to filter tips by tags

  Scenario: withour filtering all the tips are shown
    Given I am on the front page
    And a tip with tag "tag1" exists
    And a tip with tag "tag2" exists
    Then a tip with tag "tag1" is shown
    And a tip with tag "tag2" is shown

  Scenario: user can filter tips by tag
    Given I am on the front page
    And a tip with tag "tag1" exists
    And a tip with tag "tag2" exists
    When tip chip "tag1" is clicked
    Then a tip with tag "tag1" is shown
    And a tip with tag "tag2" is not shown

  Scenario: user can filter tips by multiple tags
    Given I am on the front page
    And a tip with tag "tag1" exists
    And a tip with tag "tag2" exists
    And a tip with tag "tag3" exits
    When tip chip "tag1" is clicked
    And tip chip "tag2" is clicked
    Then a tip with tag "tag1" is shown
    And a tip with tag "tag2" is shown
    And a tip with tag "tag3" is not shown

  Scenario: user can select and de-select tags
    Given I am on the front page
    And a tip with tag "tag1" exists
    And a tip with tag "tag2" exists
    When tip chip "tag1" is clicked
    And tip chip "tag2" is clicked
    And tip chip "tag1" is clicked
    Then a tip with tag "tag1" is not shown
    And a tip with tag "tag2" is shown
