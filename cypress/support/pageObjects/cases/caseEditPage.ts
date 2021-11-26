import {AbstractEditPage} from "../common/editPage";

export class CaseEditPage extends AbstractEditPage<any> {
  get actor() {
    return cy.get('select[formcontrolname=actor]')
  }

  get action() {
    return cy.get('select[formcontrolname=action]')
  }

  get entity() {
    return cy.get('select[formcontrolname=entity]')
  }

  get query() {
    return cy.get('select[formcontrolname=query]')
  }

  get fn() {
    return cy.get('select[formcontrolname=function]')
  }

  fill(form: any): void {
    this.actor.select(form.actor);
    this.action.select(form.action);

    switch (form.type) {
      case 'entity': cy.get('#typeEntity').check(); break;
      case 'query': cy.get('#typeQuery').check(); break;
      case 'function': cy.get('#typeFunction').check(); break;
    }

    form.entity && this.entity.select(form.entity);
    form.query && this.query.select(form.query);
    form.fn && this.fn.select(form.fn);
  }
}
