Feature: RecalculateRequest
  As a sysadmin/developer I want to be able to
  recalculate the number of requests from the database
	and refresh the value in cache

Scenario: Recalculate requests
	Given that I made "1" requests and cleared the cache
  When I recalculate the number of requests
  Then I see "1" for "totalIncomingRequests" in the statistics
