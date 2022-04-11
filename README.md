# Peach Finance Automation exercise

### Setup
1. Clone this repository
2. Run `npm install`

Note: I developed on a Ubuntu VM, with Chrome installed.

### Running Tests

To run the login test tag in Chrome: `./node_modules/.bin/cypress-tags run -e TAGS='@login' --browser chrome`
Replace the login tag with any of the ones listed below.

To generate the Cucumber Test Report: `node report.js`


### Test Descriptions

I have been a proponent of Gherkin/Cucumber since 2012, it allows anyone to be able to read the automated tests, which is great for non technical people. It also promotes code resuse through the step paradigm. 
The feature files describing the tests can be found underneath the `integration` directory, with a file extension of `.feature`.

To enable parallelization every scenario can be run independently, to cut down time.

I have segmented the tests with the following tags:
`@login`
`@loanOptions`
`@loanSummary`
`@makePayment`
`@userSettings`

One can also run all priority tests with the tag `@priority`. I chose the login, make Payment, and Loan Option tests as high priority tests.
I would recommend all the written tests as smoke tests.
I hesitated testing the payoff remaining balance due to not knowing if that would render the test data unusable. 

And as another project I would create new containers for each test run, being seeded, so data such as estimated payoff date will not mutate over time as the tests run daily. Avoiding test data management and cleanup in the automation suite, and perhaps even just being able to call a cleanup API for the dev/qa/stage environments would be a great practice. 









