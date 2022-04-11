
import { Given, Before, Then, When } from "cypress-cucumber-preprocessor/steps";
import PaymentActions from "../actions/makePayment";

let paymentDate;
let paymentAmount;
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

    
});



