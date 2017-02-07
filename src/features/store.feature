Feature: Store service
  As a developer I want to get a schema object
  when requesting one by name

Scenario: Requesting a schema
  When I request schema "User"
  Then I should get an object

Scenario: Running a query
  When I call a query on the "User" schema
  Then I should get a Promise
