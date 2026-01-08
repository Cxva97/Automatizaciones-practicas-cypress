/// <reference types="cypress" />
describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('https://www.laboratoriodetesting.com/')
  })

  it('displays two todo items by default', () => {
    cy.get('.inline-block').click()
    cy.get('a[href="/products/set-de-pesas-ajustables"]').closest('article')
    .contains('button', 'Añadir al carrito')
    .click()
    cy.get('[data-at="cart-opener"]').click()

    

  })
})