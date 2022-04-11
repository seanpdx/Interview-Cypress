import { Given, Before, Then, When } from "cypress-cucumber-preprocessor/steps";
import UserSettingsActions from "../actions/userSettings";

let phoneNumber: string;
let relation: string;

When("I add additional contacts", (dataTable) => {

    let stepData = dataTable.hashes();
    phoneNumber = stepData[0]['phoneNumber'];
    relation = stepData[0]['relation'];

    UserSettingsActions.addContact(phoneNumber,relation);
    


});

Then("I see it is updated in the application", () => {

    


});

