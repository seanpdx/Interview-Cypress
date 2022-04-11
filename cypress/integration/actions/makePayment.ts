import Utility from "../../support/utility";
class PaymentActions {

    static makePayment(date: string, amount: string, paymentAccount: string) {
        let formattedDate: string = Utility.returnDate(date)!;
        cy.contains('Make a payment').click();
        cy.contains('Make payment').should('be.visible');
        cy.contains('Today, ').click();

        cy.get('.react-datepicker-ignore-onclickoutside').clear().type(formattedDate).type('{enter}');

        cy.get('input[name="Other amount"]').check({ force: true });

        cy.get('input[placeholder="0.00"]').type(amount);

        cy.contains('Select payment method').click();
        cy.contains(paymentAccount).click();

        cy.get('button[data-cy="submit"]').click();

        // Validate payment modal

        cy.get('div[data-testid="modal-content"]').should('include.text', amount);

        cy.get('button[data-cy="modal-submit"]').click();


    }
    static assertPaymentScheduled() {
        cy.get('span[data-testid="payment-successful-message"]').should('include.text', 'Payment was successfully scheduled.');
    }

}
export default PaymentActions;