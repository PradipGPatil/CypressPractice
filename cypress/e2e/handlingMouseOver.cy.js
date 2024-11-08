/// <reference types="Cypress"/>

describe('validating alert', () => {
  it('should validate alert ', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    // invoke in method in cypress which is used to invoke browser method, here show in method below example to mouser over and click
    // cy.get('.mouse-hover-content').invoke('show');
    // cy.contains('Top').click();
    // cy.url().should('include','top');

    // to click by mean of dom


    cy.contains('Top').click({force:true});
    cy.url().should('include','top');
  })
})