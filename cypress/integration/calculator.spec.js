describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it("should update the display of the running total", () => {
    cy.get("#number3").click();
    cy.get("#number2").click();
    cy.get(".display").should('contain', '32')
  })

  it("should update the display of the the arithmetical operations", () => {
    cy.get("#number3").click();
    cy.get("#operator-multiply").click();
    cy.get("#number2").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should('contain', '6')
  })
  it("should chain multiple operations together", () => {
    cy.get("#number3").click();
    cy.get("#operator-multiply").click();
    cy.get("#number2").click();
    cy.get("#operator-subtract").click();
    cy.get("#number2").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should('contain', '4')
  })

  it("should get he output as expected for a range of numbers (positive)", () => {
  cy.get("#number2").click();
  cy.get("#operator-multiply").click();
  cy.get("#number3").click();
  cy.get("#operator-equals").click();
  cy.get(".display").should('contain', '6')
})

it("should get he output as expected for a range of numbers (negative)", () => {
  cy.get("#number2").click();
  cy.get("#operator-subtract").click();
  cy.get("#number3").click();
  cy.get("#operator-equals").click();
  cy.get(".display").should('contain', '-1')
})

it("should get he output as expected for a range of numbers (decimals)", () => {
  cy.get("#number3").click();
  cy.get("#operator-divide").click();
  cy.get("#number2").click();
  cy.get("#operator-equals").click();
  cy.get(".display").should('contain', '1.5')
})

it("should get he output as expected for a range of numbers (very large numbers)", () => {
  cy.get("#number3").click();
  cy.get("#number2").click();
  cy.get("#number3").click();
  cy.get("#number2").click();
  cy.get("#operator-multiply").click();
  cy.get("#number3").click();
  cy.get("#number2").click();
  cy.get("#number3").click();
  cy.get("#number2").click();
  cy.get("#operator-equals").click();
  cy.get(".display").should('contain', '10445824')
})

})