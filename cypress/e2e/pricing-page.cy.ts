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
    it('should use correct desktop stylings', () => {
      cy.get('.pricing-works__content-wrapper').should(
        'have.css',
        'grid-template-columns',
        '0px 600px 150px 150px 0px'
      );
    });

    describe('Mobile Display', () => {
      beforeEach(() => {
        cy.viewport(500, 900);
      });
      it('should display component vertically', () => {
        cy.get('.pricing-works__content-wrapper').should(
          'have.css',
          'grid-template-columns',
          '500px'
        );
      });
    });
  });
});
