/// <reference types="Cypress"/>

describe('validating alert', () => {
  it('should validate alert ', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    //removed attribute before clicking on element
    cy.get('#opentab').invoke('removeAttr', 'target').click();

    //here we have switched domain
    cy.origin('https://www.qaclickacademy.com/', () => {
      cy.contains('About us').click();
      cy.contains(' QAClick Academy').should('be.visible');
    })


  })
})