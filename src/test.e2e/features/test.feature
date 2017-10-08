@google
Feature: Test google page

  Scenario: Clicking the "Foo" button on the Search Page will fill in the "Bar" field on the Results Page
    Given I go to the "GoogleHome" page
    When  I type "Hello" into the "searchBox" field
    Then  I click the "search" button
    And   I wait for 3 seconds