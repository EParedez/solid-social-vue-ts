// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('a', 'Home')
    cy.contains('a', 'Login')
    cy.get('img[alt="Vue logo"]').should('be.visible')
  })
})
