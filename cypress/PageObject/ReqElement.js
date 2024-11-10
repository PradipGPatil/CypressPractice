class ReqElement{
    getVertialLiberaryBtn() {
        return cy.get('.btn.btn-primary');
    }

    getTableRowWithHeader(){
        return cy.get('tr');
    }

}

export default ReqElement;