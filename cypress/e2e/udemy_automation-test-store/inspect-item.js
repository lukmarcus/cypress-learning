/// <reference types="cypress" />

describe('Inspect Automation Test Store using chain of commands', () => {
    it('Should click on the first item using item header', () => {
        cy.visit('https://automationteststore.com/')
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname')
            .click()
    })

    it('Should click on the first item using item text', () => {
        cy.visit('https://automationteststore.com/')
        cy.get('.prdocutname')
            .contains('Skinsheen Bronzer Stick')
            .click()
            .invoke('text')
            .then((itemHeaderText) => {
                cy.log(`Button text is: ${itemHeaderText}`)
          })
    })

    it('Should click on the first item using index', () => {
        cy.visit('https://automationteststore.com/')
        cy.get('#featured')
            .find('.prdocutname')
            .eq(0)
            .click()
    })
})