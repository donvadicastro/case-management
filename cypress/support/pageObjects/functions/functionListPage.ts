import {AbstractListPage} from "../common/listPage";

export class FunctionListPage extends AbstractListPage {
  get createNewLabel(): string {
    return "Add Function";
  }

  navigateTo(): void {
    cy.get('a.nav-link').contains('FUNCTIONS').click();
  }
}
