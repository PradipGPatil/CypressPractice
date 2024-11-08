/// <reference types="Cypress"/>

describe("handling calendar", () => {
    const month = '6';
    const year = '2025';
    const dayToSelect = '1';
    const day = new RegExp(`^${dayToSelect}$`);
    const expectedList=[month,dayToSelect,year]

    it("test handling calendar", () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('a[href="#/offers"]').invoke('removeAttr', 'target').click();
        cy.get('.react-date-picker__calendar-button').click();
        cy.get(".react-calendar__navigation__label").click();
        cy.get('.react-calendar__navigation__label').click();
        cy.contains(year).click();
        cy.get('.react-calendar__year-view__months__month').eq(Number(month)-1).click();
        // cy.get('.react-calendar__month-view__days__day').each(($el, index, $List) => {
        //     const daysText = $el.text();
        //     if (daysText === '10') {
        //         console.log(daysText);
        //         cy.get('.react-calendar__month-view__days__day').eq(index).click();
        //     }
        // })
        cy.contains('abbr',day).click();

        //assertion

        cy.get('.react-date-picker__inputGroup__input').each(($el,index,$list)=>{
            cy.wrap($el).invoke('val').should('eq',expectedList[index]);
        })




    })
});
