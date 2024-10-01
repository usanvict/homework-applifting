Feature: user can browse the items

Scenario: user can open browsed items
    Given user is on browsing page
    When user opens the item
    Then user sees item details

Scenario: user can continue browsing
    Given user is on browsing page
    When user clicks on the first item
    And item is opened
    And user clicks Close button
    Then item is closed
    And user is on browsing page

Scenario: user can continue browsing after item has been added to cart
    Given user has item details opened
    And user clicks Add to cart button
    And item is added to cart
    When user closes confirmation
    Then user is on browsing page