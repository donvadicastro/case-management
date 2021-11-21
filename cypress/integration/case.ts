describe('UseCase Test', () => {
  beforeEach('login and clean-up', () => {
    indexedDB.deleteDatabase('firebaseLocalStorageDb');

    cy.visit('/');
    cy.get('input[name=username]').type(Cypress.env('authLogin') + '{enter}');
    cy.get('input[name=password]').type(Cypress.env('authPass') + '{enter}');
    cy.get('#login-email-pass').click();
    cy.url().should('eq', 'http://localhost:4200/dashboard')
  })

  it('use case creation should work', () => {
    const id = 'test' + new Date().getTime();

    cy.visit('/management/projects');

    // create project
    cy.get('.btn-primary').should('contain', 'Add Project').click();
    cy.get('input[formcontrolname=name]').type(id + 'Project');
    cy.get('.btn-primary').should('contain', 'Submit').should('not.be.disabled').click();

    // check created and navigate
    cy.get(`a[title="${id}Project"]`).should('contain', 'manage').click();

    //should be in project
    cy.get('h3').should('contain', id +  'Project');

    // create actor
    cy.get('.nav-link').contains('ACTORS').click();
    cy.get('.btn-primary').should('contain', 'Add Actor').click();
    cy.get('input[formcontrolname=name]').type(id + 'Actor');
    cy.get('input[formcontrolname=description]').type(id + 'Actor Description');
    cy.get('.btn-primary').should('contain', 'Submit').should('not.be.disabled').click();

    // create action
    cy.get('.nav-link').contains('ACTIONS').click();
    cy.get('.btn-primary').should('contain', 'Add Action').click();
    cy.get('input[formcontrolname=name]').type(id + 'Action');
    cy.get('input[formcontrolname=description]').type(id + 'Action Description');
    cy.get('.btn-primary').should('contain', 'Submit').should('not.be.disabled').click();

    // create entity
    cy.get('.nav-link').contains('ENTITIES').click();
    cy.get('.btn-primary').should('contain', 'Add Entity').click();
    cy.get('input[formcontrolname=name]').type(id + 'Entity');
    cy.get('input[formcontrolname=description]').type(id + 'Entity Description');
    cy.get('.btn-primary').should('contain', 'Submit').should('not.be.disabled').click();

    // create use-case
    cy.get('.nav-link').contains('CASES').click();
    cy.get('.btn-primary').should('contain', 'Add Case').click();
    cy.get('select[formcontrolname=actor]').select(id + 'Actor');
    cy.get('select[formcontrolname=action]').select(id + 'Action');
    cy.get('#typeEntity').check();
    cy.get('select[formcontrolname=entity]').select(id + 'Entity');
    cy.get('.btn-primary').should('contain', 'Submit').should('not.be.disabled').click();

    // check
    cy.get('table').find('td').should('contain', `${id}Actor ${id}Action ${id}Entity`)
  })
})
