/// <reference types="cypress" />

describe('visit cypress', () => {
  it('visit url', () => {
    cy.visit('http://localhost:49000');
  });
});
