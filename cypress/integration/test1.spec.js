/// <reference types="cypress" />

describe('visit cypress', () => {
  it('visit url', () => {
    cy.visit('http://locjalhost:3000');
  });
});
