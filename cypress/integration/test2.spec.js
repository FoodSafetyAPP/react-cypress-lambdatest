/// <reference types="cypress" />

describe('visit cypress', () => {
  it('visit url', () => {
    cy.visit('https://www.google.com/');
  });
});
