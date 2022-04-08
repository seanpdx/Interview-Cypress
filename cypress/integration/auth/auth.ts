
import { Given, Before, Then, When } from "cypress-cucumber-preprocessor/steps";


Then("I am notified that I am not authorized to log in", () => {
 
  // Continue button Disabled
  // Login error message shown

  cy.get('button[data-cy="submit"]').should('be.disabled');
  cy.contains('Not authorized').should('be.visible');

});

