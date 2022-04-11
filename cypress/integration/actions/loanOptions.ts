class loanOptionsActions {

    static changeDueDate (frequency: string, paymentDay: string){

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

}

export default loanOptionsActions;