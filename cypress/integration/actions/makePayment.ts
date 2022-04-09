import Utility from "../../support/utility";
class PaymentActions {

    static makePayment(date: string, amount: number){
        let formattedDate: string = Utility.returnDate(date)!;
        cy.contains('Make a payment').click();
        cy.contains('Make payment').should('be.visible');
        cy.contains('Today, ').click();

       cy.get('.react-datepicker-ignore-onclickoutside').clear().type(formattedDate);



    }

}
export default PaymentActions;