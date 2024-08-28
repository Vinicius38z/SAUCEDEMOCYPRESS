describe('Selecionar produto', () => {
  // atributos

  beforeEach(() => {
    cy.visit('/')  // abre o browser na url declarada em cypress.config.js

  }) // termina before
  it('Selecionar Sauce Labs Backpack', () => {
    cy.title()   // verifica se o titulo da pagina é Swag Labs
      .should('eq', 'Swag Labs')
      // realizar login
    cy.get('input[data-test="username"]')  // preenche o usuario
          .type('standard_user')
    
          cy.get('#password')
      .type('secret_sauce')   
    cy.get('')     


  })


}) // termina describe