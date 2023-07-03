describe('Pricing Page', () => {
  beforeEach(() => {
    cy.visit('/pricing');
  });

  describe('How Pricing Works Component', () => {
    it('should load with top slot only expanded', () => {
      cy.get('#itemContainerOne').should('have.class', 'extended');
      cy.get('#itemContainerTwo').should('not.have.class', 'extended');
      cy.get('#itemContainerThree').should('not.have.class', 'extended');
    });
    it('should open corresponding slots on click', () => {
      cy.get('#itemContainerTwo').click();
      cy.get('#itemContainerOne').should('not.have.class', 'extended');
      cy.get('#itemContainerTwo').should('have.class', 'extended');
      cy.get('#itemContainerThree').should('not.have.class', 'extended');

      cy.get('#itemContainerThree').click();
      cy.get('#itemContainerOne').should('not.have.class', 'extended');
      cy.get('#itemContainerTwo').should('not.have.class', 'extended');
      cy.get('#itemContainerThree').should('have.class', 'extended');

      cy.get('#itemContainerOne').click();
      cy.get('#itemContainerOne').should('have.class', 'extended');
      cy.get('#itemContainerTwo').should('not.have.class', 'extended');
      cy.get('#itemContainerThree').should('not.have.class', 'extended');
    });
  });
});
