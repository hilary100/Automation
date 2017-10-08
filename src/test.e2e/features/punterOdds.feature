@punter
Feature: Check for odds comparison

  Scenario: Check punter site for odds comparison
    Given I go to the "PunterSoccerHome" page
    When  I get best values of table one
#    When  I click the "oddsComparison" link
#    Then  I should be on the "PunterOddsComparison" page
#    And   I scroll to the "soccerItemLink" element
#    And   I click the "soccerItemLink"
    And   I wait for 3 seconds