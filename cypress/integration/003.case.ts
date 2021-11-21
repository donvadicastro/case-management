describe('UseCase Test', () => {
  const id = Cypress.env('uniqueId');

  it('use case creation should work', () => {
    // create use-case with entity and check
    cy.get('.nav-link').contains('CASES').click();
    cy.get('.btn-primary').should('contain', 'Add Case').click();
    cy.get('select[formcontrolname=actor]').select(id + 'Actor');
    cy.get('select[formcontrolname=action]').select(id + 'Action');
    cy.get('#typeEntity').check();
    cy.get('select[formcontrolname=entity]').select(id + 'Entity');
    cy.get('.btn-primary').should('contain', 'Submit').should('not.be.disabled').click();
    cy.get('table').find('td').should('contain', `${id}Actor ${id}Action ${id}Entity`)

    // create use-case with query and check
    cy.get('.btn-primary').should('contain', 'Add Case').click();
    cy.get('select[formcontrolname=actor]').select(id + 'Actor');
    cy.get('select[formcontrolname=action]').select(id + 'Action');
    cy.get('#typeQuery').check();
    cy.get('select[formcontrolname=query]').select(id + 'Query');
    cy.get('.btn-primary').should('contain', 'Submit').should('not.be.disabled').click();
    cy.get('table').find('td').should('contain', `${id}Actor ${id}Action ${id}Query`)

    // create use-case with query and check
    cy.get('.btn-primary').should('contain', 'Add Case').click();
    cy.get('select[formcontrolname=actor]').select(id + 'Actor');
    cy.get('select[formcontrolname=action]').select(id + 'Action');
    cy.get('#typeFunction').check();
    cy.get('select[formcontrolname=function]').select(id + 'Function');
    cy.get('.btn-primary').should('contain', 'Submit').should('not.be.disabled').click();
    cy.get('table').find('td').should('contain', `${id}Actor ${id}Action ${id}Function`)
  })
})
