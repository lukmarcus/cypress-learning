/// <reference types="cypress" />

describe("Test Contact Us for via Automation Test Store", () => {
    it.only("Should be able to submit a successful submission via contact us form and go back to front page", () => {
            cy.visit('https://automationteststore.com/')
            //cy.xpath('//a[contains(@href,"/contact")]').click()
            cy.get('a[href$="contact"]').click()
            cy.get('#ContactUsFrm_first_name').should('have.attr', 'name', 'first_name')
            cy.get('#ContactUsFrm_first_name').type("Jan")
            cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
            cy.get('#ContactUsFrm_email').type("jan@kowalski.pl")
            cy.get('#ContactUsFrm_enquiry').should('have.attr', 'name', 'enquiry')
            cy.get('#ContactUsFrm_enquiry').type("Enquiry from Jan Kowalski")
            //cy.xpath('//button[@title="Submit"]').click()
            cy.get('button[title="Submit"]').click()
            cy.contains('#maincontainer', "Your enquiry has been successfully sent to the store owner!")
            cy.get('a[title="Continue"]').click()
            cy.url().should('eq', 'https://automationteststore.com/')
    })

    it("Should not be able to submit a successful submission via contact form without any inputs and see message for every field", () => {
            cy.visit('https://automationteststore.com/')
            cy.get('a[href$="contact"]').click()
            cy.get('button[title="Submit"]').click()
            cy.contains('#maincontainer', "Your enquiry has been successfully sent to the store owner!").should('not.exist')
            cy.get('#field_11 div[class="element_error has-error"]').should('be.visible')
            cy.get('#field_12 div[class="element_error has-error"]').should('be.visible')
            cy.get('#field_13 div[class="element_error has-error"]').should('be.visible')
    })
})