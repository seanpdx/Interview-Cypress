class LoginActions {

    static login(email: string, password: string) {
        cy.get('input[name="email"]').click({ force: true }).type(email);
        cy.get('input[name="password"]').click({ force: true }).type(password);
        cy.get('button[data-cy="submit"]').click();
    }

    static signOut() {
     cy.visit("sign-out");
    }

}

export default LoginActions;