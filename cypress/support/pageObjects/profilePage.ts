export class ProfilePage {
  navigateTo() {
    cy.visit('/profile');
  }

  cleanUp() {
    cy.on('window:confirm', () => true);
    cy.get('button.btn-danger').click();
  }
}
