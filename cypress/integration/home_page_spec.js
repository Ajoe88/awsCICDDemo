describe('The Home Page', () => {
  it('successfully loads', () => {
      cy.visit('/') // change URL to match your dev URL
  })

  it('should have the right element', () => {
    cy.get('.App-logo').should('be.visible')
})
})