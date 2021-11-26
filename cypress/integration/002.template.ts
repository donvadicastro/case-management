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

describe('Template Test', () => {
  const id = new Date().getTime();
  const projectEditPage = new ProjectEditPage();
  const projectListPage = new ProjectListPage();

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

  const caseEditPage = new CaseEditPage();
  const caseListPage = new CaseListPage();

  it('project template creation should work', () => {
    projectListPage.create({name: `${id}TemplateProject`, isTemplate: true}, projectEditPage);

    // check created and navigate
    cy.get('button.collapsed').click();
    cy.get(`a[title="${id}TemplateProject"]`).should('contain', 'manage').click();

    //should be in project
    cy.get('h3').should('contain', `${id}TemplateProject`);

    //should be activated other links
    cy.get('a.nav-link').contains('ACTORS');
    cy.get('a.nav-link').contains('ACTIONS');
    cy.get('a.nav-link').contains('ENTITIES');
    cy.get('a.nav-link').contains('QUERIES');
    cy.get('a.nav-link').contains('FUNCTIONS');
  })

  describe('Template Resources Test', () => {
    it('template actor creation should work', () => {
      actorListPage.create({name: `${id}TemplateActor`, description: id + 'Actor Description'}, actorEditPage);
      actorListPage.verifyInList(`${id}TemplateActor`);
    })

    it('template action creation should work', () => {
      actionListPage.create({name: `${id}TemplateAction`, description: id + 'Action Description'}, actionEditPage);
      actionListPage.verifyInList(`${id}TemplateAction`);
    })

    it('template entity creation should work', () => {
      entityListPage.create({name: `${id}TemplateEntity`, description: id + 'Entity Description'}, entityEditPage);
      entityListPage.verifyInList(`${id}TemplateEntity`);
    })

    it('template query creation should work', () => {
      queryListPage.create({name: `${id}TemplateQuery`, description: 'Query Description', from: `${id}TemplateEntity`, where: 'Query Where'}, queryEditPage);
      queryListPage.verifyInList(`${id}TemplateQuery`);
    })

    it('template function creation should work', () => {
      functionListPage.create({name: `${id}TemplateFunction`, description: id + 'Function Description'}, functionEditPage);
      functionListPage.verifyInList(`${id}TemplateFunction`);
    })
  })

  describe('Template UseCase Test', () => {
    it('template use case creation for entity should work', () => {
      caseListPage.create({actor: `${id}TemplateActor`, action: `${id}TemplateAction`, type: 'entity', entity: `${id}TemplateEntity`}, caseEditPage);
      caseListPage.verifyInList(`${id}TemplateActor ${id}TemplateAction ${id}TemplateEntity`);
    })

    it('template use case creation for query should work', () => {
      caseListPage.create({actor: `${id}TemplateActor`, action: `${id}TemplateAction`, type: 'query', query: `${id}TemplateQuery`}, caseEditPage);
      caseListPage.verifyInList(`${id}TemplateActor ${id}TemplateAction ${id}TemplateQuery`);
    })

    it('template use case creation for function should work', () => {
      caseListPage.create({actor: `${id}TemplateActor`, action: `${id}TemplateAction`, type: 'function', fn: `${id}TemplateFunction`}, caseEditPage);
      caseListPage.verifyInList(`${id}TemplateActor ${id}TemplateAction ${id}TemplateFunction`);
    })
  })

  describe('Template Import Test', () => {
    it('import should work', () => {
      projectListPage.create({name: `${id}ImportProject`, isTemplate: false}, projectEditPage);
      cy.get(`a[title="${id}ImportProject"]`).should('contain', 'manage').click();

      projectListPage.import(`${id}TemplateProject`);

      caseListPage.navigateTo();
      caseListPage.verifyInList(`${id}TemplateActor ${id}TemplateAction ${id}TemplateEntity`);
      caseListPage.verifyInList(`${id}TemplateActor ${id}TemplateAction ${id}TemplateQuery`);
      caseListPage.verifyInList(`${id}TemplateActor ${id}TemplateAction ${id}TemplateFunction`);

      actorListPage.navigateTo();
      actorListPage.verifyInList(`${id}TemplateActor`);

      actionListPage.navigateTo();
      actionListPage.verifyInList(`${id}TemplateAction`);

      entityListPage.navigateTo();
      entityListPage.verifyInList(`${id}TemplateEntity`);

      queryListPage.navigateTo();
      queryListPage.verifyInList(`${id}TemplateQuery`);

      functionListPage.navigateTo();
      functionListPage.verifyInList(`${id}TemplateFunction`);
    })
  })
})
