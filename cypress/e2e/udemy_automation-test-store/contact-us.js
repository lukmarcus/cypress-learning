/// <reference types="Cypress" />

describe("Test Contact Us for via Automation Test Store", () => {
    it("Should be able to submit a successful submission via contact us form and go back to front page", () => {
            cy.visit('https://automationteststore.com/')
            cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"]').click()
            cy.get('#ContactUsFrm_first_name').type('Jan')
            cy.get('#ContactUsFrm_email').type('jan@kowalski.pl')
            cy.get('#ContactUsFrm_enquiry').type('Enquiry from Jan Kowalski')
            cy.get('.col-md-6 > .btn').click()
            cy.contains('*', "Your enquiry has been successfully sent to the store owner!")
            cy.get('#maincontainer [href="https://automationteststore.com/"]').click()
    })
})