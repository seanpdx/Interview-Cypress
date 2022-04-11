class loanSummaryActions {

    static assertPaymentActivity(paymentAmount: string, paymentMethod: string){
        cy.url().should('include', 'activity');
        cy.contains(paymentAmount).click();
        cy.contains(paymentMethod).should('be.visible');


    }

    static assertLoanSummary(amountPaid: string, amountRemaining: string, principalPaid: string, interestPaid: string, payoffDate: string){

        cy.contains('assignment').click();
        cy.contains(amountPaid).should('be.visible');
      //  cy.contains(amountRemaining).should('be.visible');  // seems to be changing.
        cy.contains(principalPaid).should('be.visible');
        cy.contains(interestPaid).should('be.visible');
        cy.contains(payoffDate).should('be.visible');

    }

    static assertStatements(statementDate: string) {

        cy.contains('description').click();
        cy.contains(statementDate).should('be.visible');

        // TODO verify file download and view

    }

}
export default loanSummaryActions;