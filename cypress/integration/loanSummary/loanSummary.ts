import { Given, Before, Then, When } from "cypress-cucumber-preprocessor/steps";
import loanSummaryActions from "../actions/loanSummary";

let paymentAmount: string;
let paymentMethod: string;
let amountPaid: string;
let amountRemaining: string;
let principalPaid: string;
let interestPaid: string;
let payoffDate: string;



Then("I can see my recent activity", (dataTable) => {
    let stepData = dataTable.hashes();
    paymentAmount = stepData[0]['recentPayment'];
    paymentMethod = stepData[0]['paymentMethod'];

    loanSummaryActions.assertPaymentActivity(paymentAmount,paymentMethod);
   
   });

   Then("I can see my loan summary", (dataTable) => {
    let stepData = dataTable.hashes();
    amountPaid = stepData[0]['amountPaid'];
    amountRemaining = stepData[0]['amountRemaining'];
    principalPaid = stepData[0]['principalPaid'];
    interestPaid = stepData[0]['interestPaid'];
    payoffDate =  stepData[0]['payoffDate'];

    loanSummaryActions.assertLoanSummary(amountPaid, amountRemaining, principalPaid, interestPaid, payoffDate);
    // amountRemaining seems to be changing.
  
   
   });

   Then("I can view my statements", (dataTable) => {
    let stepData = dataTable.hashes();

  
   
   });