describe('UseCase Test', () => {
  const id = Cypress.env('uniqueId');

  it('use case creation for entity should work', () => {
    cy.get('.nav-link').contains('CASES').click();
    cy.get('.btn-primary').should('contain', 'Add Case').click();
    cy.get('select[formcontrolname=actor]').select(id + 'Actor');
    cy.get('select[formcontrolname=action]').select(id + 'Action');
    cy.get('#typeEntity').check();
    cy.get('select[formcontrolname=entity]').select(id + 'Entity');
    cy.get('.btn-primary').should('contain', 'Submit').should('not.be.disabled').click();
    cy.get('table').find('td').should('contain', `${id}Actor ${id}Action ${id}Entity`)
  })

  it('use case creation for query should work', () => {
    cy.get('.btn-primary').should('contain', 'Add Case').click();
    cy.get('select[formcontrolname=actor]').select(id + 'Actor');
    cy.get('select[formcontrolname=action]').select(id + 'Action');
    cy.get('#typeQuery').check();
    cy.get('select[formcontrolname=query]').select(id + 'Query');
    cy.get('.btn-primary').should('contain', 'Submit').should('not.be.disabled').click();
    cy.get('table').find('td').should('contain', `${id}Actor ${id}Action ${id}Query`)
  })

  it('use case creation for function should work', () => {
    cy.get('.btn-primary').should('contain', 'Add Case').click();
    cy.get('select[formcontrolname=actor]').select(id + 'Actor');
    cy.get('select[formcontrolname=action]').select(id + 'Action');
    cy.get('#typeFunction').check();
    cy.get('select[formcontrolname=function]').select(id + 'Function');
    cy.get('.btn-primary').should('contain', 'Submit').should('not.be.disabled').click();
    cy.get('table').find('td').should('contain', `${id}Actor ${id}Action ${id}Function`)
  })
})
