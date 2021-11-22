describe('Project Test', () => {
  const id = new Date().getTime();
  Cypress.env('uniqueId', id)

  it('project creation should work', () => {
    cy.visit('/management/projects');

    // create project
    cy.get('.btn-primary').should('contain', 'Add Project').click();
    cy.get('input[formcontrolname=name]').type(id + 'Project');
    cy.get('.btn-primary').should('contain', 'Submit').should('not.be.disabled').click();

    // check created and navigate
    cy.get(`a[title="${id}Project"]`).should('contain', 'manage').click();

    //should be in project
    cy.get('h3').should('contain', id + 'Project');

    //should be activated other links
    cy.get('a.nav-link').contains('ACTORS');
    cy.get('a.nav-link').contains('ACTIONS');
    cy.get('a.nav-link').contains('ENTITIES');
    cy.get('a.nav-link').contains('QUERIES');
    cy.get('a.nav-link').contains('FUNCTIONS');
  })

  describe('Resources Test', () => {
    const id = Cypress.env('uniqueId');

    it('actor creation should work', () => {
      cy.get('a.nav-link').click();
      cy.get('.btn-primary').should('contain', 'Add Actor').click();
      cy.get('input[formcontrolname=name]').type(id + 'Actor');
      cy.get('input[formcontrolname=description]').type(id + 'Actor Description');
      cy.get('.btn-primary').should('contain', 'Submit').should('not.be.disabled').click();
      cy.get('table').find('td').should('contain', `${id}Actor`)
    })

    it('action creation should work', () => {
      cy.get('a.nav-link').contains('ACTIONS').click();
      cy.get('.btn-primary').should('contain', 'Add Action').click();
      cy.get('input[formcontrolname=name]').type(id + 'Action');
      cy.get('input[formcontrolname=description]').type(id + 'Action Description');
      cy.get('.btn-primary').should('contain', 'Submit').should('not.be.disabled').click();
      cy.get('table').find('td').should('contain', `${id}Action`)
    })

    it('entity creation should work', () => {
      cy.get('a.nav-link').contains('ENTITIES').click();
      cy.get('.btn-primary').should('contain', 'Add Entity').click();
      cy.get('input[formcontrolname=name]').type(id + 'Entity');
      cy.get('input[formcontrolname=description]').type(id + 'Entity Description');
      cy.get('.btn-primary').should('contain', 'Submit').should('not.be.disabled').click();
      cy.get('table').find('td').should('contain', `${id}Entity`)
    })

    it('query creation should work', () => {
      cy.get('a.nav-link').contains('QUERIES').click();
      cy.get('.btn-primary').should('contain', 'Add Query').click();
      cy.get('input[formcontrolname=name]').type(id + 'Query');
      cy.get('select[formcontrolname=from]').select(id + 'Entity');
      cy.get('input[formcontrolname=where]').type(id + 'Query Where');
      cy.get('input[formcontrolname=description]').type(id + 'Query Description');
      cy.get('.btn-primary').should('contain', 'Submit').should('not.be.disabled').click();
      cy.get('table').find('td').should('contain', `${id}Query`)
    })

    it('function creation should work', () => {
      cy.get('a.nav-link').contains('FUNCTIONS').click();
      cy.get('.btn-primary').should('contain', 'Add Function').click();
      cy.get('input[formcontrolname=name]').type(id + 'Function');
      cy.get('input[formcontrolname=description]').type(id + 'Function Description');
      cy.get('.btn-primary').should('contain', 'Submit').should('not.be.disabled').click();
      cy.get('table').find('td').should('contain', `${id}Function`)
    })
  })
})
