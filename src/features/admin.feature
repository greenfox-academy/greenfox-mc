Feature: Admin page
  As a sysadmin I want to be able
  to see information about incoming
  requests.

Scenario: Check the incoming requests
  Given the system get an Incoming request
  Given I open the page "admin"
  When I get the incoming requests
  Then I see "1" incoming request in the list

