
import { Given, Before, Then, When } from "cypress-cucumber-preprocessor/steps";
import PaymentActions from "../actions/makePayment";

let paymentDate;
let paymentAmount;

Then("I schedule a payment for today", (dataTable) => {
    let stepData = dataTable.hashes();
    paymentAmount = stepData[0]['amount'];
    

    paymentDate = 'today';
    PaymentActions.makePayment(paymentDate, paymentAmount);


});


Then("the payment is successfully scheduled", () => {


});

Then("the payment shows in the activity feed", () => {

    
});



