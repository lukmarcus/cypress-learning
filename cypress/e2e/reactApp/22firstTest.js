Cypress.config('baseUrl', 'http://localhost:3001');

describe('Heading text', () => {
    it('Should contain the correct title', () => {
        cy.visit('/example-1')
        cy.get('h1')
            .invoke('text')
            .should('eq', 'My Awesome Web Application')
    })
})