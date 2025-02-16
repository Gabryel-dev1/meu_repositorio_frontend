/// <reference types="cypress" />

describe('Testes para editar um contato', () => {
    beforeEach(() => {
      cy.visit('https://agenda-contatos-react.vercel.app/');
    });
  
    it('Deve editar um contato', () => {
      cy.get('button.edit').first().click();
  
      cy.get('input[type="text"]').clear().type('Gabriela Martins');
  
      cy.get('input[type="email"]').clear().type('gabriela.martins@exemplo.com');
  
      cy.get('input[type="tel"]').clear().type('11 94567 8901');
  
      cy.get('button.alterar').first().click();
  
      cy.get('ul').should('contain', 'Gabriela Martins');
  
      cy.screenshot('contato-editado-gabriela');
    });
});
