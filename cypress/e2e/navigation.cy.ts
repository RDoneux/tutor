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
  });

  describe('Mobile Stylings', () => {
    beforeEach(() => {
      cy.viewport(500, 900);
    });
    it('should not contain text navigation links in mobile view', () => {
      cy.get('.nav-bar__routes').should('have.css', 'display', 'none');
    });

    it('should display mobile navigation menu off screen', () => {
      cy.get('.nav-bar__mobile-menu').should(
        'have.css',
        'transform',
        'matrix(1, 0, 0, 1, -500, 0)'
      );
    });
  });
});
