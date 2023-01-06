//<reference types = "Cypress" />

describe('Centrarl de Atendimento ao Cliente TAT', function() {

    beforeEach(function (){
        cy.visit('./src/index.html')
    })

    it('Verifica o titulo de aplicação', function (){

        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
        
    })

    it('Preenche os campos obrigtórios e enviar o formulário', function (){
        cy.fillMandatoryFieldsAndSubmit()
    
    })
    it.only('Preenche os campos obrigtórios e enviar o formulário', function (){
       cy.geT('input[type="radio"]')
       .should('have.length', '3')
       .each(function($radio){
        cy.wrap($radio).check()
        cy.wrap($radio).should('be.checked')
       })
    
    })
})