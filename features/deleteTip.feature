Feature: As a user, I want to be able to delete a tip

    Scenario: user can delete an existing tip
        Given I am on the front page
        And add title field is clicked
        And "delete this" is written in the add title field
        And Button + is pressed
        And a tip with "delete this" as title is shown
        When the delete button is pressed
        Then a tip with title "delete this" is not shown