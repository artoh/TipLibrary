Feature: As a user, I want to be able to edit the description of an existing tip 

    Scenario: user can edit the description of an existing tip
        Given I am on the front page
        And a tip exists
        When edit button is clicked
        And "321 tset" is entered in the add description field
        And Button Save is pressed
        And Button More is pressed
        Then a tip with the description "321 tset" is shown