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
    projectListPage.create({name: id + 'Project', isTemplate: false}, projectEditPage);

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
      actorListPage.create({name: `${id}Actor`, description: id + 'Actor Description'}, actorEditPage);
      actorListPage.verifyInList(`${id}Actor`);
    })

    it('action creation should work', () => {
      actionListPage.create({name: `${id}Action`, description: id + 'Action Description'}, actionEditPage);
      actionListPage.verifyInList(`${id}Action`);
    })

    it('entity creation should work', () => {
      entityListPage.create({name: `${id}Entity`, description: id + 'Entity Description'}, entityEditPage);
      entityListPage.verifyInList(`${id}Entity`);
    })

    it('query creation should work', () => {
      queryListPage.create({name: `${id}Query`, description: 'Query Description', from: `${id}Entity`, where: 'Query Where'}, queryEditPage);
      queryListPage.verifyInList(`${id}Query`);
    })

    it('function creation should work', () => {
      functionListPage.create({name: `${id}Function`, description: id + 'Function Description'}, functionEditPage);
      functionListPage.verifyInList(`${id}Function`);
    })
  })

  describe('UseCase Test', () => {
    const caseEditPage = new CaseEditPage();
    const caseListPage = new CaseListPage();

    it('template use case creation for entity should work', () => {
      caseListPage.create({actor: `${id}Actor`, action: `${id}Action`, type: 'entity', entity: `${id}Entity`}, caseEditPage);
      caseListPage.verifyInList(`${id}Actor ${id}Action ${id}Entity`);
    })

    it('template use case creation for query should work', () => {
      caseListPage.create({actor: `${id}Actor`, action: `${id}Action`, type: 'query', query: `${id}Query`}, caseEditPage);
      caseListPage.verifyInList(`${id}Actor ${id}Action ${id}Query`);
    })

    it('template use case creation for function should work', () => {
      caseListPage.create({actor: `${id}Actor`, action: `${id}Action`, type: 'function', fn: `${id}Function`}, caseEditPage);
      caseListPage.verifyInList(`${id}Actor ${id}Action ${id}Function`);
    })
  })

})
