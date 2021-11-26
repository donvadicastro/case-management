import {AbstractEditPage} from "../common/editPage";

export class QueryEditPage extends AbstractEditPage<any> {
  get name() {
    return cy.get('input[formcontrolname=name]')
  };

  get description() {
    return cy.get('input[formcontrolname=description]')
  };

  get from() {
    return cy.get('select[formcontrolname=from]')
  };

  get where() {
    return cy.get('input[formcontrolname=where]')
  };

  fill(form: any): void {
    this.name.type(form.name);
    this.description.type(form.description);
    this.from.select(form.from);
    this.where.type(form.where);
  }
}
