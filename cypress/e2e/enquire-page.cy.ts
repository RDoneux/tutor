describe('Enquire Page', () => {
  beforeEach(() => {
    cy.visit('/enquire');
  });

  describe('Page Content', () => {
    it('should contain the enquiry form', () => {
      cy.get('.enquiry-form__container').contains('Enquire Now');
      cy.get('.enquiry-form__year-group').should('exist');
      cy.get('.enquiry-form__in-person-online').should('exist');
      cy.get('.enquiry-form__subject').should('exist');
      cy.get('.enquiry-form__subject-level').should('exist');
      cy.get('.enquiry-form__horizontal-separator').should('exist');
      cy.get('.enquiry-form__title').should('exist');
      cy.get('.enquiry-form__forename').should('exist');
      cy.get('.enquiry-form__surname').should('exist');
      cy.get('.enquiry-form__postcode').should('exist');
      cy.get('.enquiry-form__phone').should('exist');
      cy.get('.enquiry-form__email').should('exist');
      cy.get('.enquiry-form__toggle-comments').should('exist');
      cy.get('.enquiry-form__submit').should('exist');

      cy.get('.enquiry-form__additional-comments').should('not.exist');
    });

    it('should show additional comments when toggle comments is clicked', () => {
      cy.get('.enquiry-form__toggle-comments').shadow().find('input').click();
      cy.get('.enquiry-form__additional-comments').should('exist');
      cy.get('.enquiry-form__toggle-comments').shadow().find('input').click();
      cy.get('.enquiry-form__additional-comments').should('not.exist');
    });
  });
});
