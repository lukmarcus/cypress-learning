/// <reference types='cypress' />
Cypress.config('baseUrl', 'https://automationteststore.com');

describe('Alias nad invoke', () => {
    it('Should validate a specific hair care product', () => {
        cy.visit('/')
        cy.get('a[href*="product/category&path="]').contains('Hair Care').click()
        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail')
        cy.get('@productThumbnail').its('length').should('be.greaterThan', 5)
        cy.get('@productThumbnail').should('include', 'Seaweed Conditioner')
        })
    
    it('Should count all the product thumbnails on the main page', () => {
        cy.visit('/')
        cy.get('.thumbnail').should('have.length', 16)
        })

    it('Should check if productcart has title as "Add to cart"', () => {
        cy.visit('/')
        cy.get('.thumbnail').as('productThumbnail')
        cy.get('@productThumbnail').find('.productcart').should('have.attr', 'title', 'Add to Cart')
        })
    })