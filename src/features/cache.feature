Feature: Cache
  As a developer I want to be able to increment
  value for a key in a cache

Scenario: Increment a key
  When I increment key "test" with value "1"
  Then I get "1" for key "test"

Scenario: Set a key
	When I set key "foo" with value "2"
	Then I get "2" for key "foo"
