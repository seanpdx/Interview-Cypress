class loanOptionsActions {

    static changeDueDate(frequency: string, paymentDay: string) {

        cy.get('button[label="Loan"]').click();
        cy.contains('Change due date').click();

        cy.url().should('include', 'change-due-date');

        cy.contains('FREQUENCY').should('be.visible');

        cy.contains('Select frequency').click({ force: true });
        cy.contains(frequency).click({ force: true });


        cy.contains('DATES').should('be.visible');
        cy.contains('Select range').click({ force: true });
        cy.contains(paymentDay).click({ force: true });


        cy.contains('View full payment schedule').should('be.visible');

    }

    // Manage payment methods

    static addBankAccount(name: string, routingNumber: string, accountNumber: string) {

        cy.get('button[label="Loan"]').click();
        cy.contains('Manage payment methods').click();

        cy.url().should('include', 'payment-methods');


        cy.contains('Add payment method').click();
        cy.contains('Bank Account (ACH)').click();

        cy.get('input[placeholder="Enter full name"]').click({ force: true }).type(name);

        cy.get('input[placeholder="Enter routing number"]').click({ force: true }).type(routingNumber);

        accountNumber = (Math.floor(Math.random() * 90000) + 10000).toString();

        cy.get('input[placeholder="Enter account number"]').click({ force: true }).type(accountNumber);

        cy.get('button[data-cy="submit"]').click();

        cy.contains('Bank account successfully added.').should('be.visible');

        cy.contains('Done').click();

    }

    static removeBankAccount(bank:string){

        // cy.get('header').parent()
    }

}

export default loanOptionsActions;