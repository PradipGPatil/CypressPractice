/// <reference types="Cypress"/>

const neatCsv=require('neat-csv');
import { Buffer } from 'buffer';
import process from 'process';

describe('should be to stroe token', async function(){
    let productName;
    it('shouid able to store token in local storage',function(){
        cy.loginApi().then(()=>{
            cy.visit('https://rahulshettyacademy.com/client',{
                onBeforeLoad:function(window){
                    window.localStorage.setItem('token',Cypress.env('token'));
                }
            })
            cy.get('.card-body b').eq(1).then((el)=>{
                productName=el.text();
            })
            cy.get('.card-body button:last-child').eq(1).click();
            cy.contains('Cart ').click();
            cy.contains('Checkout').click();
            cy.get('[placeholder*="Country"]').type('ind');
            cy.get('section[class*="list"] button span').each(($el,index,$list)=>{
            
                if($el.text()===" India"){
                    cy.wrap($el).click();
            
                }

            })
            cy.contains('Place Order').click();
            cy.contains('CSV').click();
            cy.readFile(Cypress.config("fileServerFolder")+"/cypress/downloads/order-invoice_pradippatil1543.csv")
            .then(async(text)=>{
                const csv=await neatCsv(text);
                console.log(csv);
                const actualProductName=csv[0]["Product Name"];
                expect(productName).to.be.eql(actualProductName);
            })
        })
    })
})