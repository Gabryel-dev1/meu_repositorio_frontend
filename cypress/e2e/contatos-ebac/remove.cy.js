/// <reference types="cypress" />

describe('Testes para excluir um contato', () => {
    beforeEach(() => {
      cy.visit('https://agenda-contatos-react.vercel.app/');
    });
  
    it('Deve excluir o contato "Carlos Oliveira"', () => {
      cy.intercept('DELETE', '**/api/contatos*').as('deleteContato');
  
      cy.get('div.contato')
        .contains('Carlos Oliveira')
        .parents('div.contato')
        .find('button.delete')
        .click();
  
      cy.wait('@deleteContato');
  
      cy.get('div.contato').should('not.contain', 'Carlos Oliveira');
  
      cy.screenshot('contato-carlos-oliveira-excluido');
    });
});
