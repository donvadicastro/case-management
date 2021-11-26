import {AbstractListPage} from "../common/listPage";

export class QueryListPage extends AbstractListPage {
  get createNewLabel(): string {
    return "Add Query";
  }

  navigateTo(): void {
    cy.get('a.nav-link').contains('QUERIES').click();
  }
}
