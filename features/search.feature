Feature: User using search query input in Search page
         to find messages that match query

  Background:
    Given user is logged in

  @happyPath
  Scenario: user search for message from the dashboard
    When user picks one message from dashboard
    And user navigates to Search page
    And user search for picked message from dashboard
    Then user sees message found

  @sadPath
  Scenario: user searches for message author's email from the dashboard
    When user picks message sender's email from dashboard
    And user navigates to Search page
    And user searches for picked from dashboard message
    Then user sees no message found

  @sadPath
  Scenario: user searches with an empty query
    When user navigates to Search page
    And user searches with empty query
    Then user sees no message found