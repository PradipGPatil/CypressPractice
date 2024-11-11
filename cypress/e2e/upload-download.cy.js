/// <reference types="cypress"/>

describe("upload and donwload",function(){
    it('should able to upload and download excel',function(){
        cy.visit('https://rahulshettyacademy.com/upload-download-test/index.html');
        cy.get('#downloadButton').click();
        const path=Cypress.config('fileServerFolder')+'/cypress/downloads/download.xlsx'
        cy.task('writeExcel',{ searchText:"Apple",replaceText:350,change:{rowChange:0,colChange:2},filePath:path});
        cy.get('#fileinput').selectFile(path);
        cy.contains('Apple').parent().parent().find('#cell-4-undefined').then((text)=>{
            const t=text.text();
            expect(t).to.be.eql('350');
        })
    })

})