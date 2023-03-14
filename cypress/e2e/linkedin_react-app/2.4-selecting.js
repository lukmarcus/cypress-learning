Cypress.config('baseUrl', 'http://localhost:3001');

describe('Text box with max characters', () => {
    it('Should display the appropriate remaining characters count in first input', () => {
        cy.visit('/example-3')
        cy.get('[data-cy="first-name-chars-left-count"]')
            .invoke('text')
            .should('eq', '15')
        cy.get('[data-cy="input-first-name"]')
            .type('12345')
        cy.get('[data-cy="first-name-chars-left-count"]')
            .invoke('text')
            .should('eq', '10')
        cy.get('[data-cy="input-first-name"]')
            .type('abcdefghij')
        cy.get('[data-cy="first-name-chars-left-count"]')
            .invoke('text')
            .should('eq', '0')
    })

    it('Should prevent user from typing more characters when max is reached in first input', () => {
        cy.visit('/example-3')
        cy.get('[data-cy="input-first-name"]')
            .type('abcdefghijklmnopqrstuvxyz')
            .should('have.attr', 'value', 'abcdefghijklmno')
    })

    it('Should display the appropriate remaining characters count in second input', () => {
        cy.visit('/example-3')
        cy.get('[data-cy="last-name-chars-left-count"]')
            .invoke('text')
            .should('eq', '15')
        cy.get('[data-cy="input-last-name"]')
            .type('12345')
        cy.get('[data-cy="last-name-chars-left-count"]')
            .invoke('text')
            .should('eq', '10')
        cy.get('[data-cy="input-last-name"]')
            .type('abcdefghij')
        cy.get('[data-cy="last-name-chars-left-count"]')
            .invoke('text')
            .should('eq', '0')
    })

    it('Should prevent user from typing more characters when max is reached in second input', () => {
        cy.visit('/example-3')
        cy.get('[data-cy="input-last-name"]')
            .type('abcdefghijklmnopqrstuvxyz')
            .should('have.attr', 'value', 'abcdefghijklmno')
    })
})