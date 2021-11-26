import {AbstractEditPage} from "../common/editPage";

export class ProjectEditPage extends AbstractEditPage<any> {
  get name() {
    return cy.get('input[formcontrolname=name]');
  }

  get isTemplate() {
    return cy.get('input[formcontrolname=isTemplate]');
  }

  fill(form: any): void {
    this.name.should('be.visible').type(form.name);
    form.isTemplate && this.isTemplate.should('be.visible').check();
  }
}
