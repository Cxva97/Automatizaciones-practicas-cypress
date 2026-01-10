// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('DatosPersonales', (nombre, password) => { 
    cy.log(Cypress.env('username'))  //acceder a las variables de entorno del cypress config
    // cy.log(Cypress.env('terminal')) //variable ent desde la terminal
    //Establece nombre y password
    //Esta linea verifica que el boton enviar este deshabilitado
    cy.get('[data-at="practice-submit"]').should('be.disabled').as('BotonEnviar')
    cy.get('[data-at="practice-name"]').type(nombre)
    cy.get('[name="password"]').type(password)
})

Cypress.Commands.add('detalleContacto', (pais,fecha) => {
    //Horario de contacto
    //Pais
    //intereses 
    //fecha de nacimiento
    cy.get('#sch_Mañana').click()
    cy.get('[data-at="practice-country"]').select(pais)
    cy.get('[id="Pruebas manuales"]').check()
    cy.get('[data-at="practice-interests-devops"]').check()
    cy.get('[data-at="practice-dateOfBirth"]').type(fecha) //truco, escribir acorde al formato que indica en el DOM
})

Cypress.Commands.add('EnviarFormulario', () => {
    //Boton enviar
    cy.get('@BotonEnviar').should('be.enabled')
    cy.get('@BotonEnviar').click()
    cy.get('.swal2-confirm').click() //cypress 
    // .swal2-confirm.swal2-styled.swal2-default-outline (propia busqueda)
})