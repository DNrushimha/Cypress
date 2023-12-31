describe('checkout process', () => {
    it('checking the Checkout Process with login Page', () => {

        cy.visit('https://uat.fortywinks.com.au/').viewport(1280, 720);

        cy.get('.justify-end > :nth-child(1)').click();

        cy.get(':nth-child(1) > .inputField').type('anonymous@gmail.com');
        cy.get(':nth-child(2) > .inputField').type('Devulapalli@123');

        cy.get('form > :nth-child(4) > .flex').click();

        cy.get('._cart_menu_cart_menu-toggle__sJmqV').click();

        cy.contains('Continue to checkout').click();

        cy.contains('Continue to delivery').click();

        cy.get(':nth-child(4) > .bg-primary').click();

        //cy.get(':nth-child(4) > .bg-primary').click();
    })
})