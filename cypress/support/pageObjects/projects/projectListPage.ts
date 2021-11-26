import {AbstractListPage} from "../common/listPage";

export class ProjectListPage extends AbstractListPage {
  get createNewLabel(): string { return 'Add Project'; }

  navigateTo(): void {
    cy.visit('/management/projects');
  }
}
