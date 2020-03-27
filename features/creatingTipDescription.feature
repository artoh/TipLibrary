Feature: As a user, I want to be able to add a description to a tip


    Scenario: user can add a new tip with a description
        Given I am on the front page
        And add title field is clicked
        When "test 123" is entered in the add description field
        And Button + is pressed
        And Button More is pressed
        Then a tip with the description "test 123" is shown