import { Given, Before, Then, When } from "cypress-cucumber-preprocessor/steps";
import loanOptionsActions from "../actions/loanOptions";

let frequency: string;
let paymentDay: string

let accountName: string;
let accountRoutingNumber: string;
let accountNumber: string;
let bankName: string;


Then("I am able to change the loan due date", (dataTable) => {

    let stepData = dataTable.hashes();
    frequency = stepData[0]['frequency'];
    paymentDay = stepData[0]['paymentDay'];

    loanOptionsActions.changeDueDate(frequency, paymentDay);

   });

   Then("I am able to add a bank account", (dataTable) => {

    let stepData = dataTable.hashes();
    accountRoutingNumber = stepData[0]['routingNumber'];
    accountName = stepData[0]['name'];
    accountNumber = stepData[0]['accountNumber'];

    loanOptionsActions.addBankAccount(accountName, accountRoutingNumber, accountNumber);

});

Then("I am able to remove a bank account", (dataTable) => {
    let stepData = dataTable.hashes();
    bankName = stepData[0]['bankName'];

    loanOptionsActions.removeBankAccount(bankName);

});

Then("I change my nickname", () => {

    loanOptionsActions.changeNickname();

});

Then("I email my payoff statement", () => {

    loanOptionsActions.emailPayoffStatement();

});