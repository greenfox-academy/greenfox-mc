Feature: Stats service
  As a sysadmin I want to be able see
  statistics from incoming requests

  Scenario: Recalculate the requests
    Given the system get an Incoming request
    When the system recalculate the requests
    Then I see "1" for "totalIncomingRequests" in the statistics


