
import { Given, Before, Then, When } from "cypress-cucumber-preprocessor/steps";
import PaymentActions from "../actions/makePayment";

let paymentDate;
let paymentAmount: string;
let paymentAccount;

Then("I schedule a payment for today", (dataTable) => {
    let stepData = dataTable.hashes();
    paymentAmount = stepData[0]['amount'];
    paymentAccount = stepData[0]['paymentAccount'];
    

    paymentDate = 'today';
    PaymentActions.makePayment(paymentDate, paymentAmount, paymentAccount);


});


Then("the payment is successfully scheduled", () => {
 PaymentActions.assertPaymentScheduled();

});

Then("the payment shows in the activity feed", () => {
    cy.url().should('include', 'activity');
    cy.contains(paymentAmount);
    
});

Then("I enable Autopay", (dataTable) => {
    let stepData = dataTable.hashes();
    let autopayFrequency: string = stepData[0]['frequency'];
    let autopayAccount: string = stepData[0]['paymentAccount'];
    let paymentDay: string = stepData[0]['day'];

    PaymentActions.enableAutopay(autopayFrequency,autopayAccount, paymentDay);

});

Then("I disable Autopay", () => {

    PaymentActions.disableAutopay();
    

    
});




