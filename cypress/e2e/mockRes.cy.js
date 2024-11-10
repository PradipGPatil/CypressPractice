/// <reference types="Cypress"/>

import ReqElement from "../PageObject/ReqElement";

describe('mock response ', () => {
  let fixturedata;
  const reqElement = new ReqElement();
  before(function () {
    cy.fixture('example').then(function (data) {
      fixturedata = data;
    });

  })

  // beforeEach(function(){


  // })


  it('return single resule in response', function () {
    cy.visit(fixturedata.url);
    cy.intercept({
      url: fixturedata.getBookApi,
      method: "GET"
    }, {
      statusCode: 200,
      body:
        [
          {
            "book_name": "RestAssured with Java",
            "isbn": "BSG",
            "aisle": "2302"
          }]
    }).as("getDommyCours");
    reqElement.getVertialLiberaryBtn().click();

    //here we need to pass request and response as exact parameter
    cy.wait('@getDommyCours').then(({ request, response }) => {
      cy.get('tr').should('have.length', response.body.length + 1);
    });

    cy.getContainText('Oops only 1 Book available', 'Oops only 1 Book available');
  })

  it("should return 403 for invalid url", function () {
    cy.visit(fixturedata.url);
    cy.intercept('GET', fixturedata.getBookApi, (req) => {
      req.url = fixturedata.getBookApi + 'patil',

        req.continue((res) => {
          expect(res.statusCode).to.be.eql(404);
        })
    }).as('dummyUrl');
    reqElement.getVertialLiberaryBtn().click();
    cy.wait('@dummyUrl')
  })

})