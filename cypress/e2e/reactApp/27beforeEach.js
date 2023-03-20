Cypress.config('baseUrl', 'http://localhost:3001');

describe('Text box with max characters', () => {
    beforeEach(() => {
        cy.visit('/example-3')
        cy.get('[data-cy="first-name-chars-left-count"]')
            .as('firstCharsLeft')
        cy.get('[data-cy="input-first-name"]')
            .as('firstInput')
        cy.get('[data-cy="last-name-chars-left-count"]')
            .as('lastCharsLeft')
        cy.get('[data-cy="input-last-name"]')
            .as('lastInput')
    })
    it('Should display the appropriate remaining characters count in first input', () => {
        cy.get('@firstCharsLeft')
            .invoke('text')
            .should('eq', '15')
        cy.get('@firstInput')
            .type('12345')
        cy.get('@firstCharsLeft')
            .invoke('text')
            .should('eq', '10')
        cy.get('@firstInput')
            .type('abcdefghij')
        cy.get('@firstCharsLeft')
            .invoke('text')
            .should('eq', '0')
    })

    it('Should prevent user from typing more characters when max is reached in first input', () => {
        cy.get('@firstInput')
            .type('abcdefghijklmnopqrstuvxyz')
            .should('have.attr', 'value', 'abcdefghijklmno')
    })

    it('Should display the appropriate remaining characters count in second input', () => {
        cy.get('@lastCharsLeft')
            .invoke('text')
            .should('eq', '15')
        cy.get('@lastInput')
            .type('12345')
        cy.get('@lastCharsLeft')
            .invoke('text')
            .should('eq', '10')
        cy.get('@lastInput')
            .type('abcdefghij')
        cy.get('@lastCharsLeft')
            .invoke('text')
            .should('eq', '0')
    })

    it('Should prevent user from typing more characters when max is reached in second input', () => {
        cy.get('@lastInput')
            .type('abcdefghijklmnopqrstuvxyz')
            .should('have.attr', 'value', 'abcdefghijklmno')
    })
})