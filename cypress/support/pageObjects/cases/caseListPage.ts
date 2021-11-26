import {AbstractListPage} from "../common/listPage";

export class CaseListPage extends AbstractListPage {
  get createNewLabel(): string {
    return "Add Case";
  }

  navigateTo(): void {
    cy.get('a.nav-link').contains('CASES').click();
  }
}
