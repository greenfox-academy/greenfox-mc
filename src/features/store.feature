Feature: Store service
  As a developer I want to get a schema object
  when requesting one by name

Scenario: Requesting a shema
  When I request schema "User"
  Then I should get an object
