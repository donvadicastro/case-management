import {AbstractListPage} from "../common/listPage";

export class ActorListPage extends AbstractListPage {
  get createNewLabel(): string {
    return "Add Actor";
  }

  navigateTo(): void {
    cy.get('a.nav-link').contains('ACTORS').click();
  }
}
