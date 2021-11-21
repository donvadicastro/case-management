describe('Login Test', () => {
  beforeEach(() => indexedDB.deleteDatabase('firebaseLocalStorageDb'))

  it('Login page should be default', () => {
    cy.visit('/');
    cy.title().should('eq', 'Case management application');
    cy.url().should('eq', 'http://localhost:4200/sign-in?redirectTo=%2Fdashboard');
  })

  it('login/logout should work', () => {
    cy.visit('/');

    cy.get('input[name=username]').type(Cypress.env('authLogin') + '{enter}');
    cy.get('input[name=password]').type(Cypress.env('authPass') + '{enter}');
    cy.get('#login-email-pass').click();

    cy.url().should('eq', 'http://localhost:4200/dashboard')
  })
})
