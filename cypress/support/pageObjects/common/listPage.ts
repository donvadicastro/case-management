export abstract class AbstractListPage {
  abstract get createNewLabel(): string;
  abstract navigateTo(): void;

  get createBtn() { return cy.get('.btn-primary').should('contain', this.createNewLabel); }

  navigateToCreate() {
    this.createBtn.click();
  }

  verifyInList(value: string) {
    cy.get('table').find('td').should('contain', value);
  }
}
