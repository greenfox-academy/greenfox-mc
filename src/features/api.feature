Feature: Use Blog API
  As a developer I would like to use
  the Blog API developed by another team

  Scenario: Fech blog post
  Given I have a blog post "test"
  When I get the blog post "test"
  Then I see "test post" in the rendered component

