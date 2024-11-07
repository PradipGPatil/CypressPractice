/// <reference types="Cypress"/>

describe('my first test', () => {
  it('should visit page', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    cy.get('input[type="search"]').type('ca');
    cy.get('.product:visible').should('have.length', 4);
    //we cannot store element on const because we need to handle promise by oursef
    //so cypress provide option alias 
    cy.get('.products').as('prodEl');
    cy.get('@prodEl').find('.product').eq(2).contains('ADD TO CART').click();

    //now we have to find element from list and click on 
    //specific items to the card

    cy.get('@prodEl').find('.product').each(($el, index, $list) => {
      const vegText= $el.find('h4.product-name').text();
      // const vegText = cy.get('h4.product-name').invoke('text');
      if (vegText.includes('Cashews')) {
        cy.wrap($el).contains('ADD TO CART').click();
      }
    });

    //validating logo has text -assertion
    cy.get('.greenLogo').should('have.text','GREENKART');

    // if we are going to run this command the promise is not hanlded here 
    // const logoElement=cy.get('.brand.greenLogo').text();
    // cy.log(logoElement);

    //we can do below so for not cypress command we 
    //need to hanlde promise ourself 
    cy.get('.greenLogo').then((logoEl)=>{
     const text= logoEl.text();
      cy.log("here is your element "+text)
    })

  })
})