Feature: Database
  As a developer I should be able
  to save an incoming request

Scenario: Save request
  When a request comes in to "/ping" url with "request body" body
  Then it should be saved

