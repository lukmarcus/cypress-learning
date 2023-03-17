/// <reference types='cypress' />
Cypress.config('baseUrl', 'https://automationteststore.com');

describe('Iterate over elements', () => {
    it('Should log information about all hair care products', () => {
        cy.visit('/')
        cy.get('a[href*="product/category&path="]').contains('Hair Care').click()
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            cy.log("Index: " + index + " : " + $el.text())
        })
    })

    it('Should add specific product to basket', () => {
        cy.visit('/')
        cy.get('a[href*="product/category&path="]').contains('Hair Care').click()
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
          if($el.text().includes("Curls to straight Shampoo")) {
            cy.wrap($el).click()
          }
        })
    
    })

})