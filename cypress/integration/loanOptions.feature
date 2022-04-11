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

    Scenario: Add and Remove a Bank account
        Given I am on the Peach Finance login page
        When I login with correct credentials
            | email                                   | password   |
            | auto.user+bo-2k6e-4plk@peachfinance.com | hello12345 |
        Then I am able to add a bank account
            | name        | routingNumber | accountNumberDigits |
            | Test Person | 011401533     | 5                   |
        Then I am able to remove a bank account
            | bankName         |
            | CITIZENS BANK NA |

    Scenario: Change Loan Nickname
        Given I am on the Peach Finance login page
        When I login with correct credentials
            | email                                   | password   |
            | auto.user+bo-2k6e-4plk@peachfinance.com | hello12345 |
        Then I change my nickname

    Scenario: Email Payoff Statement
        Given I am on the Peach Finance login page
        When I login with correct credentials
            | email                                   | password   |
            | auto.user+bo-2k6e-4plk@peachfinance.com | hello12345 |
        Then I email my payoff statement