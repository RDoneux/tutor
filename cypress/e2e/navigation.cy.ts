describe('Navigation Bar', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  describe('Navigation Routes', () => {
    it('should test About Me route', () => {
      cy.get('app-nav-bar').contains('About Me').click();
      cy.url().should('include', 'about-me');
    });
    it('should test Pricing route', () => {
      cy.get('app-nav-bar').contains('Pricing').click();
      cy.url().should('include', 'pricing');
    });
    it('should test Enquire route', () => {
      cy.get('app-nav-bar').contains('Enquire').click();
      cy.url().should('include', 'enquire');
    });
    it('should test home route', () => {
      cy.visit('/pricing');
      cy.get('.nav-bar__logo').click();
      cy.url()
        .should('not.include', 'about-me')
        .should('not.include', 'pricing')
        .should('not.include', 'enquire');
    });
  });

  describe('Mobile Stylings', () => {
    beforeEach(() => {
      cy.viewport(500, 900);
    });
    it('should not contain text navigation links in mobile view', () => {
      cy.get('.nav-bar__routes').should('have.css', 'display', 'none');
    });
    it('should contain mobile icon in mobile view', () => {
      cy.get('#menuIcon').should('have.css', 'display', 'inline-block');
    });

    it('should display mobile navigation menu off screen', () => {
      cy.get('.nav-bar__mobile-menu').should(
        'have.css',
        'transform',
        'matrix(1, 0, 0, 1, -500, 0)'
      );
    });

    describe('Mobile Menu', () => {
      beforeEach(() => {
        cy.get('#menuIcon').click();
      });

      it('should display mobile navigation on screen once menu icon is clicked', () => {
        cy.get('.nav-bar__mobile-menu').should(
          'have.css',
          'transform',
          'matrix(1, 0, 0, 1, 0, 0)'
        );
      });
      it('should display correct mobile menu items', () => {
        cy.get('.nav-bar__mobile-menu').contains('Menu');
        cy.get('.nav-bar__mobile-menu').contains('About Me');
        cy.get('.nav-bar__mobile-menu').contains('Enquire');
        cy.get('.nav-bar__mobile-menu').contains('Pricing');

        cy.get('.nav-bar__mobile-menu').get('#closeIcon');

        const facebookLogo = cy
          .get('.nav-bar__mobile-menu')
          .get('#facebookLogo');
        facebookLogo.should('have.attr', 'target', '_blank');
        const twitterLogo = cy.get('.nav-bar__mobile-menu').get('#twitterLogo');
        twitterLogo.should('have.attr', 'target', '_blank');
        const linkedInLogo = cy
          .get('.nav-bar__mobile-menu')
          .get('#linkedInLogo');
        linkedInLogo.should('have.attr', 'target', '_blank');
      });
      it('should display mobile navigation off screen once close icon is clicked', () => {
        cy.get('#closeIcon').click();
        cy.get('.nav-bar__mobile-menu').should(
          'have.css',
          'transform',
          'matrix(1, 0, 0, 1, -500, 0)'
        );
      });
    });
  });
});
