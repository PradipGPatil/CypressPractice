


describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1');
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked');

    // if you have multiple option and want to click specific element
    cy.get('input[type="checkbox"]').check(['option2','option3']).should('be.checked');

    //handling static dropdown which have select tag
    cy.get('Select').select('option2').should('have.value','option2');

    //handling dynami dropdown
    cy.get('#autocomplete').type('ind');
    cy.get('.ui-menu-item div').each(($el,index,$list)=>{
      if($el.text()==='India'){
        cy.wrap($el).click();
      }
    })

    //to check hide and unhide element
    cy.get('#displayed-text').as('hideUnhideEl');
    cy.get('@hideUnhideEl').should('be.visible');
    cy.get('#hide-textbox').click();
    cy.get('@hideUnhideEl').should('not.be.visible');
    cy.get('#show-textbox').click();
    cy.get('@hideUnhideEl').should('be.visible');
    

  })
})