@login
Feature: Login to Peach Finance

  Scenario: Login to Peach Finance, then Sign Out
    Given I am on the Peach Finance login page
    When I login with correct credentials
      | email                                   | password   |
      | auto.user+bo-2k6e-4plk@peachfinance.com | hello12345 |
    Then I am signed into Peach Finance
    When I sign out
    Then I am returned to the login page

  Scenario: Attempt to sign in with wrong password
    Given I am on the Peach Finance login page
    When I login with correct credentials
      | email                                   | password   |
      | incorrect-user@peachfinance.com | incorrectPassword |
    Then I am notified that I am not authorized to log in



