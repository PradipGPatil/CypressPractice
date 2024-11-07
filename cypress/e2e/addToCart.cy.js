/// <reference types="Cypress"/>

describe('my place order test', () => {
  it('should ablet to place order', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    cy.get('input[type="search"]').type('ca');

    //we cannot store element on const because we need to handle promise by oursef
    //so cypress provide option alias 
    cy.get('.products').as('prodEl');
    //now we have to find element from list and click on 
    //specific items to the card

    cy.get('@prodEl').find('.product').each(($el, index, $list) => {
      const vegText = $el.find('h4.product-name').text();
      // const vegText = cy.get('h4.product-name').invoke('text');
      if (vegText.includes('Cashews')) {
        cy.wrap($el).contains('ADD TO CART').click();
      }
    });

    cy.get('.cart-icon>img').click();
    //to get text by default we do not have contain method in css 
    //but cypress provide contains mehod which equvalent to xpath contains text metod
    cy.contains('PROCEED TO CHECKOUT').click();
    cy.contains('Place Order').click();



  })
})