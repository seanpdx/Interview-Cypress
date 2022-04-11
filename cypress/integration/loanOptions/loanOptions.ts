import { Given, Before, Then, When } from "cypress-cucumber-preprocessor/steps";
import loanOptionsActions from "../actions/loanOptions";

let frequency: string;
let paymentDay: string
Then("I am able to change the loan due date", (dataTable) => {

    let stepData = dataTable.hashes();
    frequency = stepData[0]['frequency'];
    paymentDay = stepData[0]['paymentDay'];

    loanOptionsActions.changeDueDate(frequency, paymentDay);


    


   });