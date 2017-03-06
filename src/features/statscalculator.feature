Feature: Stats Calculator service
  As a sysadmin I want to be able to
  recalculate statistics

  Scenario: Recalculate the requests
    Given the system get an Incoming request
    Given the system get an Incoming request
    When the system recalculate the requests
    Then I see "2" for "totalIncomingRequests" in the statistics
    Then I see "2" request in the database


