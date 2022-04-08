import { Given, Before, Then, When } from "cypress-cucumber-preprocessor/steps";
import LoginActions from "../actions/login";

let email;
let password;

Given("I am on the Peach Finance login page", () => {
    cy.visit("login");
    cy.title().should("eq", "PeachyLoans - Account Login");
});


When("I login with correct credentials", (dataTable) => {
    let stepData = dataTable.hashes();
    email = stepData[0]['email'];
    password = stepData[0]['password'];

    LoginActions.login(email, password);

});

Given("I am signed into Peach Finance", () => {
    cy.url().should('include', '/loans');
});


When("I sign out", () => {
    LoginActions.signOut();
  
});

Then("I am returned to the login page", () => {
    cy.url().should('include', '/login');
});

