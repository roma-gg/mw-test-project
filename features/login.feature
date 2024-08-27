Feature: User login

  Background:
    Given user is on the login page

  @happyPath
  Scenario: User login with valid credentials
    When user login with valid credentials
    Then user is launched on dashboard page

  @sadPath
  Scenario: User login with invalid credentials
    When user login with invalid credentials
    Then user stays on the login page

  @sadPath
  Scenario: User login with valid email and invalid password
    When user login with valid email and invalid password
    Then user stays on the login page

