import {AbstractEditPage} from "../common/editPage";

export class ActionEditPage extends AbstractEditPage<any> {
  get name() {
    return cy.get('input[formcontrolname=name]')
  };

  get description() {
    return cy.get('input[formcontrolname=description]')
  };

  fill(form: any): void {
    this.name.type(form.name);
    this.description.type(form.description);
  }
}
