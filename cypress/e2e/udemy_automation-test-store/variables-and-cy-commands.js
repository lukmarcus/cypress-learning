/// <reference types='cypress' />
Cypress.config('baseUrl', 'https://automationteststore.com');

describe('Veryfying variables, cypress commands and jquery commands', () => {
    it('Should navigate to specific product pages', () => {
        cy.visit('/')
        cy.get('a[href*="product/category&path="]').contains('Makeup').click()
        cy.get('h1 .maintext').then(($headerText) => {
            const headerText = $headerText.text()
            cy.log("Found header text : " + headerText)
       })
    })

    it('Should validate properties of Contact Us page', () => {
        cy.visit('/index.php?rt=content/contact')

        //Uses cypress commands and chaining
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name')

        //JQuery approach
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
            const firstNameText = text.find('#field_11').text()
            expect(firstNameText).to.contain('First name')

                //Embedded commands (Closure)
                cy.get('#field_11').then(fnText => {
                    cy.log(fnText.text())
                    cy.log(fnText)
                })
        })


    })

})