describe('Project Test', () => {
  const id = new Date().getTime();
  Cypress.env('uniqueId', id)

  it('use case creation should work', () => {
    cy.visit('/management/projects');

    // create project
    cy.get('.btn-primary').should('contain', 'Add Project').click();
    cy.get('input[formcontrolname=name]').type(id + 'Project');
    cy.get('.btn-primary').should('contain', 'Submit').should('not.be.disabled').click();

    // check created and navigate
    cy.get(`a[title="${id}Project"]`).should('contain', 'manage').click();

    //should be in project
    cy.get('h3').should('contain', id +  'Project');
  })
})
