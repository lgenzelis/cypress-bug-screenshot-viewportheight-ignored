/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.visit('https://www.google.com');
    // uncommenting the following line "fixes" the issue
    // cy.get('html').then((html) => html.get(0).style.height = `${Cypress.config('viewportHeight')}px`);
    cy.screenshot()
  })
})
