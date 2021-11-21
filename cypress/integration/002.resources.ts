describe('Resources Test', () => {
  const id = Cypress.env('uniqueId');

  it('use case creation should work', () => {
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

    // create query
    cy.get('.nav-link').contains('QUERIES').click();
    cy.get('.btn-primary').should('contain', 'Add Query').click();
    cy.get('input[formcontrolname=name]').type(id + 'Query');
    cy.get('select[formcontrolname=from]').select(id + 'Entity');
    cy.get('input[formcontrolname=where]').type(id + 'Query Where');
    cy.get('input[formcontrolname=description]').type(id + 'Query Description');
    cy.get('.btn-primary').should('contain', 'Submit').should('not.be.disabled').click();

    // create function
    cy.get('.nav-link').contains('FUNCTIONS').click();
    cy.get('.btn-primary').should('contain', 'Add Function').click();
    cy.get('input[formcontrolname=name]').type(id + 'Function');
    cy.get('input[formcontrolname=description]').type(id + 'Function Description');
    cy.get('.btn-primary').should('contain', 'Submit').should('not.be.disabled').click();
  })
})
