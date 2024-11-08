

describe('validating alert', () => {
  it('should validate alert ', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('#opentab').then((el) => {
      const url = el.prop('href')
      cy.visit(url);
      cy.origin(url, () => {
        cy.contains('About us').click();
      })
    })


  })
})