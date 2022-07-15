/* describe('12 cuotas', () => {
  it('passes', () => {
    cy.visit('https://tienda.movistar.com.ar/')
    cy.url().should('include', 'https://tienda.movistar.com.ar/')
    cy.get("#search_mini_form > div.actions > button").click({force:true})
    cy.get("#search").type("A52")
    cy.get("#search_mini_form > div.actions > button").click()

    cy.get("#product-item-info_6952 > a > span > span > img").click({force:true})

   cy.get("#installments-text").contains('12 cuotas')
   cy.log(cy.get("#installments-text") + "FcSolido")

  })
}) */

/* describe('Gama Alta', () => {
  it('passes', () => {
    cy.visit('https://tienda.movistar.com.ar/')
    cy.url().should('include', 'https://tienda.movistar.com.ar/')
    cy.get('#layered-filter-block > div.block-title.filter-title > strong').click()
    cy.get('a[href="https://tienda.movistar.com.ar/?price=100000-200000"]').click()
    cy.get("#layered-filter-block > div.block-title.filter-title > strong").click()
    cy.get('a[href="https://tienda.movistar.com.ar/?movistar_internalmemory=916&price=100000-200000"]').click({force:true})

    cy.get("#toolbar-amount > span").should('contain', '3')

  })
}) */

describe('Gama Alta', () => {
  it('passes', () => {
    cy.visit('https://tienda.movistar.com.ar/')
    cy.url().should('include', 'https://tienda.movistar.com.ar/')
    cy.get('#layer-product-list > div.products.wrapper.grid.products-grid > ol > li:nth-child(3)').click()
    cy.get('#open-installments-modal').click()
    cy.get('#selectBank').select('Credicoop')
    cy.get('#selectCardByBank').select('Visa')

    /* Buscar valores en tabla */
  })
})


Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});   