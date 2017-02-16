Feature: Database
  As a developer I should be able
  to save an incoming request

Scenario: Save request
  When a "POST" request comes in to "/ping"
  Then it should be saved

