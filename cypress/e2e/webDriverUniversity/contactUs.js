/// <reference types='cypress' />
Cypress.config('baseUrl', 'https://webdriveruniversity.com');

describe('Test Contact Us form via WebdriverUni', () => {
    it('Should submit a successful submission via contact us form', () => {
        cy.visit('/Contact-Us/contactus.html')
        cy.document()
            .should('have.property', 'charset')
            .and('eq', 'UTF-8')
        cy.title()
            .should('eq','WebDriver | Contact Us')
        cy.url()
            .should('include', 'contactus')
        cy.get('input[name="first_name"]')
            .should('have.attr', 'placeholder', 'First Name')
            .type('Jan')
        cy.get('input[name="last_name"]')
            .should('have.attr', 'placeholder', 'Last Name')
            .type('Kowalski')
        cy.get('input[name="email"]')
            .should('have.attr', 'placeholder', 'Email Address')
            .type('jan@kowalski.pl')
        cy.get('textarea[name="message"]')
            .should('have.attr', 'placeholder', 'Comments')
            .type('Comments from Jan Kowalski')
        cy.get('input[type="submit"]')
            .click()
        cy.get('h1')
            .should('have.text', 'Thank You for your Message!')
    })

    it('Should not submit successful submission via contact us form without any information', () => {
        cy.visit('/Contact-Us/contactus.html')
        cy.get('input[type="submit"]')
            .click()
        cy.get('body')
            .contains('Error: all fields are required')
        cy.get('body')
            .contains('Error: Invalid email address')
    })
})