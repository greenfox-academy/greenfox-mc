Feature: Request Monitor service
  As a sysadmin I want to be able to
  monitor the incoming requests

  Scenario: Register incoming request
    When the system get an Incoming request
    Then I see "1" for "totalIncomingRequests" in the statistics

  Scenario: Register incoming request
    When the system get an Incoming request with an url "$url" and request body "$body"
    Then I see "1" for "totalIncomingRequests" in the statistics

  Scenario: Get all requests
    When I get all requests registered
    Then I see at least "1" requests in the statistics
