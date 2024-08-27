Feature: User sees last 30 days stats and most recent messages
         when launched to the dashboard page

  Background:
    Given user is logged in

  @happyPath
  Scenario:
    Then user sees list of 10 messages
    And user sees last 30 days stats
