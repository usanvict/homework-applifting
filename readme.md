# Homework for Applifting

This homework contains 3 sections:
- test scenarios for online shopping diagram
- 5 automated scenarios based on scenarios
- test report for Applifting.io

## Test scenarios

Test scenarios are based on the following diagram:
![online shopping diagram](https://www.uml-diagrams.org/examples/activity-examples-online-shopping.png)

📁 ./test-cases:
- browse-items.feature
- cart-action.feature
- checkout.feature
- search-items.feature

Implementation: Gherkin

## Automated scenarios

Automated scenarios were based on ./test-cases/search-items.feature, but the real page was taken as an example, Rohlik.cz

📁 ./automated-scenarios

Implementation: Playwright + Typescript

### How to run tests

1. Get Node 20 or newer

2. Install dependencies:
    `npm install`

3. Run the tests:
    `npm run test`

## Test report

Test report is based on applifting.io

The report is focused on accessibility

Implementation: plain text