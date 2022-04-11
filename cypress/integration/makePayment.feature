@makePayment
Feature: Make a payment on outstanding loan

    Scenario: Schedule a payment for today
        Given I am on the Peach Finance login page
        When I login with correct credentials
            | email                                   | password   |
            | auto.user+bo-2k6e-4plk@peachfinance.com | hello12345 |
        And I schedule a payment for today
            | amount | paymentAccount     |
            | 1.00   | Bank Account *6789 |
        Then the payment is successfully scheduled
        And the payment shows in the activity feed

    Scenario: Enable and Disable Autopay
        Given I am on the Peach Finance login page
        When I login with correct credentials
            | email                                   | password   |
            | auto.user+bo-2k6e-4plk@peachfinance.com | hello12345 |
        Then I enable Autopay
            | frequency | paymentAccount     | day    |
            | Weekly    | Bank Account *6789 | Friday |
        And I disable Autopay

