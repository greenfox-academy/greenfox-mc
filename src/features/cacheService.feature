Feature: Cache Service

	We keep track of different numbers in a cache

	Scenario: I request the value of a given key
	When I request the key "foo"
	Then I get the value "0"

	Scenario: I increate the value of a given key by given amount
	When I send a request to increase "baz" by "10"
	Then I get the value of the key increased by the amount