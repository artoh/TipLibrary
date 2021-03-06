Feature: As a user I want to be able to add tags to a tip

  Scenario: user can add a new tip with a tag
    Given I am on the front page
    When add title field is clicked
    And "tag1" is entered to the add tag field
    And Button AddTag is pressed
    And Button + is pressed
    And Button More is pressed
    Then a tip with the tag "tag1" is shown

  Scenario: user can add a tag to existing tip
    Given I am on the front page
    And a tip with tag "tag4" exists
    When edit button is clicked
    And "tag2" is entered to the add tag field
    And Button AddTag is pressed
    And Button Save is pressed
    And Button More is pressed
    Then a tip with the tag "tag2" is shown

  Scenario: user can remove a tag from existing tip
    Given I am on the front page
    And a tip with tag "tag3" exists
    When edit button is clicked
    And removetag chip "tag3" is pressed
    And Button Save is pressed
    And Button More is pressed
    Then a tip without the tag "tag3" is shown
