/// <reference types="cypress" />
const ambiente = Cypress.env('ambiente') 
const baseUrl= Cypress.env(`${ambiente}Url`)

describe('example to-do app', () => {
  beforeEach(() => {
    cy.setCookie('__AUTH-TOKEN-APP', Cypress.env('cookie'), 
    /*eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQ3Y2E5NDJjLThlZDktNGIxNy05NTJjLWU2YzVhNGI1MmEwNyIsImlhdCI6MTc2NzkwOTkwNiwiZXhwIjoxNzcwNTAxOTA2fQ.357waHqowaL6Rn8cQab-KFnzgkQlVc5LDGSO-EDgQaA */
      {secure:true})
    cy.visit(`${baseUrl}form-practice`)
  })

  it('displays two todo items by default', () => {
    cy.get('.inline-block').click()
    cy.contains('Añadir al carrito').click()
    cy.get('[data-at="cart-opener-mobile"]').click()
    cy.get('.py-5.overflow-auto').should('contains.text', 'Bandas Elásticas de Resistencia' )
    cy.get('.text-black.text-center').should('have.text', 'Total: $350.00')
    cy.get('[data-at="empty-cart"]').click()
    cy.get('.text-black.text-center').should('have.text', 'Total: $0.00')
  })

  it('find elements by text', () =>{
    cy.contains('Registrarse').click()
  })

  it('find elements by atribut', () =>{
    cy.get('[data-at="increment-quantity"]').click()
    cy.get('[data-at="add-to-cart"]').click()
  })

  it('find elements by sons', () =>{
    cy.get('[data-at="header"]').find('ul > li').eq(1).click()
    // cy.get('[data-at="header"]').find('ul > li:nth-child(2)').click()  segunda manera de hacerlo 
  })

  it('check and uncheck', ()=>{
    cy.get('[id="Pruebas manuales"]').check()
    cy.get('[data-at="practice-interests-devops"]').check()
    cy.get('[id="Pruebas manuales"]').should('be.checked')
    cy.get('[id="Desarrollo de software"]').should('not.be.checked')
  })

  it('manejo de dropdown', ()=>{
    cy.get('[data-at="practice-country"]').select('Colombia')
    cy.get('[data-at="practice-country"]').should('be.visible')
    .and('have.value', 'Colombia')//
  })

  it('manejo de radio buttons', ()=>{
    cy.get('#sch_Mañana').click()
    cy.get('#sch_Mañana').should('be.checked')
    cy.get('#sch_Tarde').should('not.be.checked')
    cy.get('#sch_Noche').should('not.be.checked')
  })

  it('write in camps', ()=>{
    cy.viewport('iphone-xr') //cambiar el tamaño de la pantalla
    cy.get('[data-at="practice-name"]').type('Cesar') //comando buscado por mi mismo
    // {force:true} sirve para forzar la accion en caso de que el elemento este oculto o deshabilitado
    cy.get('[name="password"]').type('1q2w3e{enter}')  //comando que me dio cypress
  })

  it.only('llenar formulario y enviar', ()=>{
    cy.DatosPersonales('Cesar','1q2w3e')
    cy.detalleContacto('Colombia','1997-04-10')
    cy.EnviarFormulario()
  })

  it.only('llenar formulario y enviar - distinta data', ()=>{
    cy.DatosPersonales('Gaby','4r5t6y')
    cy.detalleContacto('Argentina','2002-07-06')
    cy.EnviarFormulario()
  })

  it.only('Verificar que todos los campos son required', ()=>{
    cy.detalleContacto('Colombia','1997-04-10')
    cy.get('[data-at="practice-submit"]').should('be.disabled').as('BotonEnviar')
  })
  
  
})

//hola