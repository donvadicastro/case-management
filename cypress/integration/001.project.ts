import {ProjectEditPage} from "../support/pageObjects/projects/projectEditPage";
import {ProjectListPage} from "../support/pageObjects/projects/projectListPage";
import {ActorListPage} from "../support/pageObjects/actors/actorListPage";
import {ActorEditPage} from "../support/pageObjects/actors/actorEditPage";
import {ActionListPage} from "../support/pageObjects/actions/actionListPage";
import {ActionEditPage} from "../support/pageObjects/actions/actionEditPage";
import {EntityEditPage} from "../support/pageObjects/entities/entityEditPage";
import {EntityListPage} from "../support/pageObjects/entities/entityListPage";
import {QueryListPage} from "../support/pageObjects/queries/queryListPage";
import {QueryEditPage} from "../support/pageObjects/queries/queryEditPage";
import {FunctionListPage} from "../support/pageObjects/functions/functionListPage";
import {FunctionEditPage} from "../support/pageObjects/functions/functionEditPage";
import {CaseEditPage} from "../support/pageObjects/cases/caseEditPage";
import {CaseListPage} from "../support/pageObjects/cases/caseListPage";

describe('Project Test', () => {
  const id = new Date().getTime();
  const projectEditPage = new ProjectEditPage();
  const projectListPage = new ProjectListPage();

  it('project creation should work', () => {
    projectListPage.navigateTo();

    // create project
    projectListPage.navigateToCreate();

    projectEditPage.fill({name: id + 'Project', isTemplate: false});
    projectEditPage.submit();

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
    const actorListPage = new ActorListPage();
    const actorEditPage = new ActorEditPage();

    const actionListPage = new ActionListPage();
    const actionEditPage = new ActionEditPage();

    const entityListPage = new EntityListPage();
    const entityEditPage = new EntityEditPage();

    const queryListPage = new QueryListPage();
    const queryEditPage = new QueryEditPage();

    const functionListPage = new FunctionListPage();
    const functionEditPage = new FunctionEditPage();

    it('actor creation should work', () => {
      actorListPage.navigateTo();
      actorListPage.navigateToCreate();

      actorEditPage.fill({name: id + 'Actor', description: id + 'Actor Description'});
      actorEditPage.submit();

      actorListPage.verifyInList(`${id}Actor`);
    })

    it('action creation should work', () => {
      actionListPage.navigateTo();
      actionListPage.navigateToCreate();

      actionEditPage.fill({name: id + 'Action', description: id + 'Action Description'});
      actionEditPage.submit();

      actionListPage.verifyInList(`${id}Action`);
    })

    it('entity creation should work', () => {
      entityListPage.navigateTo();
      entityListPage.navigateToCreate();

      entityEditPage.fill({name: id + 'Entity', description: id + 'Entity Description'});
      entityEditPage.submit();

      entityListPage.verifyInList(`${id}Entity`);
    })

    it('query creation should work', () => {
      queryListPage.navigateTo();
      queryListPage.navigateToCreate();

      queryEditPage.fill({name: `${id}Query`, description: 'Query Description', from: `${id}Entity`, where: 'Query Where'});
      queryEditPage.submit();

      queryListPage.verifyInList(`${id}Query`);
    })

    it('function creation should work', () => {
      functionListPage.navigateTo();
      functionListPage.navigateToCreate();

      functionEditPage.fill({name: `${id}Function`, description: id + 'Function Description'});
      functionEditPage.submit();

      functionListPage.verifyInList(`${id}Function`);
    })
  })

  describe('UseCase Test', () => {
    const caseEditPage = new CaseEditPage();
    const caseListPage = new CaseListPage();

    it('use case creation for entity should work', () => {
      caseListPage.navigateTo();
      caseListPage.navigateToCreate();

      caseEditPage.fill({actor: `${id}Actor`, action: `${id}Action`, type: 'entity', entity: `${id}Entity`});
      caseEditPage.submit();

      caseListPage.verifyInList(`${id}Actor ${id}Action ${id}Entity`);
    })

    it('use case creation for query should work', () => {
      caseListPage.navigateTo();
      caseListPage.navigateToCreate();

      caseEditPage.fill({actor: `${id}Actor`, action: `${id}Action`, type: 'query', query: `${id}Query`});
      caseEditPage.submit();

      caseListPage.verifyInList(`${id}Actor ${id}Action ${id}Query`);
    })

    it('use case creation for function should work', () => {
      caseListPage.navigateTo();
      caseListPage.navigateToCreate();

      caseEditPage.fill({actor: `${id}Actor`, action: `${id}Action`, type: 'function', fn: `${id}Function`});
      caseEditPage.submit();

      caseListPage.verifyInList(`${id}Actor ${id}Action ${id}Function`);
    })
  })

})
