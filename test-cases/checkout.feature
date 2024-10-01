Feature: user can check out cart

Scenario: user does check out from main page
    Given user is on browsing page
    When user clicks Cart button
    And user clicks Checkout button
    Then user is redirected to Checkout

Scenario: user does check out from cart
    Given user is in cart
    When user clicks Checkout button
    Then user is redirected to Checkout