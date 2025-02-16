/// <reference types="cypress" />

describe('Testes para adicionar um contato', () => {
    beforeEach(() => {
      cy.visit('https://agenda-contatos-react.vercel.app/');
    });
  
    it('Deve adicionar um novo contato: Ana Silva', () => {
      cy.get('input[type="text"]').type('Ana Silva');
      cy.get('input[type="email"]').type('ana.silva@exemplo.com');
      cy.get('input[type="tel"]').type('11 91234 5678');
      cy.get('button.adicionar').first().click();
      cy.get('ul').should('contain', 'Ana Silva');
      cy.screenshot('contato-adicionado-ana');
    });
  
    it('Deve adicionar um novo contato: Carlos Oliveira', () => {
      cy.get('input[type="text"]').type('Carlos Oliveira');
      cy.get('input[type="email"]').type('carlos.oliveira@exemplo.com');
      cy.get('input[type="tel"]').type('11 92345 6789');
      cy.get('button.adicionar').first().click();
      cy.get('ul').should('contain', 'Carlos Oliveira');
      cy.screenshot('contato-adicionado-carlos');
    });
  
    it('Deve adicionar um novo contato: Mariana Costa', () => {
      cy.get('input[type="text"]').type('Mariana Costa');
      cy.get('input[type="email"]').type('mariana.costa@exemplo.com');
      cy.get('input[type="tel"]').type('11 93456 7890');
      cy.get('button.adicionar').first().click();
      cy.get('ul').should('contain', 'Mariana Costa');
      cy.screenshot('contato-adicionado-mariana');
    });
});
