Cypress.config('baseUrl', 'http://localhost:3001');

describe('Text box with max characters', () => {
    it('Should display the appropriate remaining characters count', () => {
        cy.visit('/example-2')
        cy.get('[data-cy="chars-left-count"]')
            .invoke('text')
            .should('eq', '15')
        cy.get('[data-cy="max-char-input"]')
            .type('12345')
        cy.get('[data-cy="chars-left-count"]')
            .invoke('text')
            .should('eq', '10')
        cy.get('[data-cy="max-char-input"]')
            .type('abcdefghij')
        cy.get('[data-cy="chars-left-count"]')
            .invoke('text')
            .should('eq', '0')
    })

    it('Should prevent user from typing more characters when max is reached', () => {
        cy.visit('/example-2')
        cy.get('[data-cy="max-char-input"]')
            .type('abcdefghijklmnopqrstuvxyz')
            .should('have.attr', 'value', 'abcdefghijklmno')
    })
})