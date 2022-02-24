/// <reference types="cypress" />

describe('demo app', () => {
  it('visit url', () => {
    cy.visit('https://www.cypress.io/');
  });
});
