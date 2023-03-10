/// <reference types="Cypress" />

describe("Test Contact Us for via WebdriverUni", () => {
    it("Should be able to open contact us form", () => {
        //cypress code
            //cy.visit('https://webdriveruniversity.com/')
            //cy.get('#contact-us').click({force: true})
    })

    it("Should be able to submit a successful submission via contact us form", () => {
        //cypress code
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type('Jan')
            cy.get('input[name="last_name"]').type('Kowalski')
            cy.get('input[name="email"]').type('jan@kowalski.pl')
            cy.get('textarea[name="message"]').type('Comments from Jan Kowalski')
            cy.get('input[type="submit"]').click()
            cy.contains("h1", "Thank You for your Message!")
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