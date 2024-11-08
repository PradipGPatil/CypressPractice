/// <reference types="Cypress"/>


describe('validating alert', () => {
  it('should validate alert ', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('#alertbtn').click();
    //here we have alert but cypress by default handle alert we do not need to do any action
    cy.get('#confirmbtn').click();


    //if we want to get text() , cypress can interact with browser event 
    cy.on('window:alert',(alerTxt)=>{
      expect(alerTxt).to.be.eq('Hello , share this practice page and share your knowledge');
    })


    // for confirmation dialog box
    cy.on('window:confirm',(dilogTxt)=>{
      expect(dilogTxt).to.be.eql('Hello , Are you sure you want to confirm?');
    })

  
    

  })
})