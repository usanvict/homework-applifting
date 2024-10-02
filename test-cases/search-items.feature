Feature: user can search for the items

Scenario: user searches for existing items
    Given user is on browsing page
    When user enters the existing item
    And user submits the existing item 
    Then user sees the results

Scenario: user searches for non-existing items
    Given user is on browsing page
    When user enters the <type> item
    And user submits the <type> item 
    Then user sees no results

    Example:
    | type |
    | empty |
    | non-existing invalid |
    | non-existing valid |

Scenario: user can open searched item
    Given user is on browsing page
    When user enters the existing item
    And user submits the existing item 
    And user sees the results
    And user opens the item
    Then user sees its details

Scenario: user can change search
    Given user sees the results
    When user enters non-exisitng item
    Then user sees no results

Scenario: user can continue browsing
    Given user has item details opened
    And user clicks Close button
    Then item is closed
    And user is on browsing page

Scenario: user can continue search after item has been added to cart
    Given user has item details opened
    And user clicks Add to cart button
    And item is added to cart
    When user clicks Close button
    Then user is on browsing page