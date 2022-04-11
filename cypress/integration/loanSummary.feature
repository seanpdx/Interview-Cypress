@loanSummary
Feature: Activity, Loan Summary, and Documents are available to the user

    Scenario: Check Activity, Summary, and Documents on the home page
        Given I am on the Peach Finance login page
        When I login with correct credentials
            | email                                   | password   |
            | auto.user+bo-2k6e-4plk@peachfinance.com | hello12345 |
        Then I can see my recent activity
            | recentPayment | paymentMethod      |
            | - $1.00       | Bank Account *6789 |
        And  I can see my loan summary
            | amountPaid | amountRemaining | principalPaid | interestPaid | payoffDate   |
            | $776.31    | $5,901.52       | $658.73       | $117.58      | Aug 17, 2023 |
        And I can view my statements
            | statementDate                         |
            | Feb 18, 2022 – Mar 17, 2022 statement |