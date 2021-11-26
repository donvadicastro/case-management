import {AbstractListPage} from "../common/listPage";

export class ActionListPage extends AbstractListPage {
  get createNewLabel(): string {
    return "Add Action";
  }

  navigateTo(): void {
    cy.get('a.nav-link').contains('ACTIONS').click();
  }
}
