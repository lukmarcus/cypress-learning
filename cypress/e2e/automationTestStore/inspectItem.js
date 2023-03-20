/// <reference types="cypress" />
Cypress.config('baseUrl', 'https://automationteststore.com');

describe('Inspect Automation Test Store using chain of commands', () => {
    it('Should click on the first item using item header', () => {
        cy.visit('/')
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname')
            .click()
    })

    it('Should click on the first item using item text', () => {
        cy.visit('/')
        cy.get('.prdocutname')
            .contains('Skinsheen Bronzer Stick')
            .click()
            .invoke('text')
            .then((itemHeaderText) => {
                cy.log(`Button text is: ${itemHeaderText}`)
          })
    })

    it('Should click on the first item using index', () => {
        cy.visit('/')
        cy.get('#featured')
            .find('.prdocutname')
            .eq(0)
            .click()
    })
})