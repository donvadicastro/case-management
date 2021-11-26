export abstract class AbstractEditPage<T> {
  private get submitBtn() { return cy.get('.btn-primary') };

  submit() {
    this.submitBtn.should('contain', 'Submit').should('not.be.disabled').click();
  }

  abstract fill(form: T): void;
}
