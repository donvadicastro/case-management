import {AbstractListPage} from "../common/listPage";

export class EntityListPage extends AbstractListPage {
  get createNewLabel(): string {
    return "Add Entity";
  }

  navigateTo(): void {
    cy.get('a.nav-link').contains('ENTITIES').click();
  }
}
