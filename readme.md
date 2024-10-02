# Homework for Applifting

This homework repository contains three sections:
- test scenarios based on an online shopping activity diagram.
- automated scenarios, which are implemented from the provided test case from `search-items.feature`
- test report  that reviews accessibility of Applifting.io

## Test scenarios

Test scenarios are designed using the following diagram:
![online shopping diagram](https://www.uml-diagrams.org/examples/activity-examples-online-shopping.png)

📁 `./test-cases`:
- `browse-items.feature`: scenarios for browsing available items
- `cart-action.feature`: scenarios for interacting the cart
- `checkout.feature`: scenarios related to the checkout process
- `search-items.feature`: scenarios for searching the items

Implementation: Gherkin syntax

## Automated scenarios

Automated scenarios were based on `./test-cases/search-items.feature`. These tests are designed to run against the real-world website Rohlik.cz (much likely to the diagram), which served as the basis for the testing.

📁 `./automated-scenarios`

Implementation: Playwright + Typescript

### How to run tests

1. Get Node 20 or newer

2. Install dependencies:
    `npm install`

3. Run the tests:
    `npm run test`

## Test report

The test report is based on the webpage [applifting.io](https://applifting.io/) and focuses specifically on accessibility aspects according to Web Content Accessibility Guidelines (WCAG) 2.2 for level A

Implementation: plain text