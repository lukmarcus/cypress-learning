/// <reference types="Cypress" />

describe("Test Contact Us for via WebdriverUni", () => {
    it("Should be able to open contact us form", () => {
            //cy.visit('https://webdriveruniversity.com/')
            //cy.get('#contact-us').click({force: true})
    })

    it.only("Should be able to submit a successful submission via contact us form", () => {
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').should('have.attr', 'placeholder', 'First Name')
            cy.get('input[name="first_name"]').type('Jan')
            cy.get('input[name="last_name"]').should('have.attr', 'placeholder', 'Last Name')
            cy.get('input[name="last_name"]').type('Kowalski')
            cy.get('input[name="email"]').should('have.attr', 'placeholder', 'Email Address')
            cy.get('input[name="email"]').type('jan@kowalski.pl')
            cy.get('textarea[name="message"]').should('have.attr', 'placeholder', 'Comments')
            cy.get('textarea[name="message"]').type('Comments from Jan Kowalski')
            cy.get('input[type="submit"]').click()
            //cy.contains("h1", "Thank You for your Message!")
            cy.get('h1').should('have.text', 'Thank You for your Message!')
    })

    it("Should not be able to submit a successful submission via contact us form without first name", () => {
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            //cy.get('input[name="first_name"]').type('Jan')
            cy.get('input[name="last_name"]').type('Kowalski')
            cy.get('input[name="email"]').type('jan@kowalski.pl')
            cy.get('textarea[name="message"]').type('Comments from Jan Kowalski')
            cy.get('input[type="submit"]').click()
            cy.contains("body", "Error: all fields are required")       
    })
})