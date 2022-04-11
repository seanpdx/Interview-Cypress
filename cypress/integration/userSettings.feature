@userSettings
Feature: User changes their settings

    Scenario: User adds additional contacts
        Given I am on the Peach Finance login page
        When I login with correct credentials
            | email                                   | password   |
            | auto.user+bo-2k6e-4plk@peachfinance.com | hello12345 |
        Then I add additional contacts
            | name   | phoneNumber | relation |
            | random | 2282161432  | Other    |

