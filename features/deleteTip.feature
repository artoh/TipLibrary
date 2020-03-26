Feature: As a user, I want to be able to delete a tip

    Scenario: user can delete an existing tip
        Given I am on the front page
        And a tip exists
        When the delete button is pressed
        Then no tips exist