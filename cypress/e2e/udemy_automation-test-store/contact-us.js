/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe("Test Contact Us for via Automation Test Store", () => {
    it("Should be able to submit a successful submission via contact us form and go back to front page", () => {
            cy.visit('https://automationteststore.com/')
            //cy.xpath('//a[contains(@href,"/contact")]').click()
            cy.get('a[href$="contact"]').click()
            cy.get('#ContactUsFrm_first_name').type("Jan")
            cy.get('#ContactUsFrm_email').type("jan@kowalski.pl")
            cy.get('#ContactUsFrm_enquiry').type("Enquiry from Jan Kowalski")
            //cy.xpath('//button[@title="Submit"]').click()
            cy.get('button[title="Submit"]').click()
            cy.contains('#maincontainer', "Your enquiry has been successfully sent to the store owner!")
            cy.get('a[title="Continue"]').click()
            cy.url().should('eq', 'https://automationteststore.com/')
    })
})
