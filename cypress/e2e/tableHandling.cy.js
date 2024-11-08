/// <reference types="Cypress"/>

describe('validating alert', () => {
  it('should validate alert ', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('tr td:nth-child(2)').each(($el,index,$list)=>{
    const courseName=$el.text();
    
    if(courseName.includes('simple Python')){
      cy.get('tr td:nth-child(2)').eq(index).next().then((price)=>{
        const pyPrice=price.text();
        expect(pyPrice).to.eql('25');

      });
    }
   
      
    })

  })
})