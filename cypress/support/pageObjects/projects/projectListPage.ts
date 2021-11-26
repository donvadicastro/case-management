import {AbstractListPage} from "../common/listPage";

export class ProjectListPage extends AbstractListPage {
  get createNewLabel(): string { return 'Add Project'; }
  get importSelector() { return cy.get('select#templates');  }
  get importBtn() { return cy.get('button[name=import-from-template]');  }

  navigateTo(): void {
    cy.visit('/management/projects');
  }

  import(projectName: string) {
    cy.on('window:confirm', () => true);

    this.importSelector.should('be.visible').select(projectName);
    this.importBtn.click();
  }
}
