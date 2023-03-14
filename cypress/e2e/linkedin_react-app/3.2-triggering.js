Cypress.config('baseUrl', 'http://localhost:3001');

describe('Basic page interactions part 2', () => {
    beforeEach(() => {
        cy.visit('/example-4')
    })
    it('Should display the name of the most recently hovered item', () => {
        cy.get('[data-cy="box-4-selected-name"]')
            .invoke('text')
            .should('eq', 'Nothing selected')
        cy.get('[data-cy="box-4-items-list"] > :nth-child(1)')
            .trigger('mouseover')
        cy.get('[data-cy="box-4-selected-name"]')
            .invoke('text')
            .should('eq', 'Option One')
        cy.get('[data-cy="box-4-items-list"] > :nth-child(2)')
            .trigger('mouseover')
        cy.get('[data-cy="box-4-selected-name"]')
            .invoke('text')
            .should('eq', 'Option Two')
        cy.get('[data-cy="box-4-items-list"] > :nth-child(3)')
            .trigger('mouseover')
        cy.get('[data-cy="box-4-selected-name"]')
            .invoke('text')
            .should('eq', 'Option Three')
    })
})