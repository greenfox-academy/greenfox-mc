Feature: Security check
  As a sysadmin I would like to discover
  the attempts to attack through the API

  Scenario: Check for attack
    Given the system get an Incoming attack
    When the request statistic is calculated
     And I see "1" processed message
     And the security check is done
    Then I see "1" processed message
    Then I see "1" for "securityIssue" in the statistics
