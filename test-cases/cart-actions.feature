Feature: user can interact with the cart

Scenario: user can view cart
    Given user is on browsing page
    When user opens cart page
    Then user sees cart page

Scenario: user can add item 
    Given user has item details opened
    When user clicks Add to cart button
    Then item is added to cart
    And item contains item

Scneario: user can update item
    Given user has cart opened
    When user updates item in cart
    Then item is updated in cart

Scenario: user can remove item
    Given user has cart opened
    When user removes item from cart
    Then item is not in cart