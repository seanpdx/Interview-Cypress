@loanOptions
Feature: Loan Options are available to the user

    Scenario: Change loan due date
        Given I am on the Peach Finance login page
        When I login with correct credentials
            | email                                   | password   |
            | auto.user+bo-2k6e-4plk@peachfinance.com | hello12345 |
        Then I am able to change the loan due date
            | frequency     | paymentDay   |
            | Twice a month | end of month |

    @current
    Scenario: Manage Payment Methods
        Given I am on the Peach Finance login page
        When I login with correct credentials
            | email                                   | password   |
            | auto.user+bo-2k6e-4plk@peachfinance.com | hello12345 |
