Feature: Store
  As I developer I want to be able to get a graphql schema object
  and pass a query to it

Scenario: Get a schema
  When I pass "helloWorld", I get a schema object

Scenario: Query a schema
  When I pass "{ hello }" query to "helloWorld" schema, I get a promise

