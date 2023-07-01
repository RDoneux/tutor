describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('About Me')
    cy.contains('Pricing')
    cy.contains('Enquire')
  })
})
