class UserSettingsActions {

    static addContact(phoneNumber: string, relation: string) {

        let name: string = 'Name ' + (Math.floor(Math.random() * 90000) + 10000).toString();


        cy.contains('account_circle').click();
        cy.contains('Settings').click();

        cy.contains('Add additional contact').click();

        cy.get('input[placeholder="Enter name"]').click({ force: true }).type(name);

        cy.contains('Select your relationship').click({ force: true });
        cy.contains(relation).click({ force: true });

        cy.get('input[placeholder="(000) 000 - 0000"]').last().click({ force: true }).type(phoneNumber);

        cy.contains('Save').click();

        cy.contains(name).should('be.visible');



    }

}
export default UserSettingsActions;