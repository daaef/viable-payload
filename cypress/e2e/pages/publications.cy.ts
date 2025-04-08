describe("Should load 'Publications' page", () => {
  const viewportSizes = ["iphone-8", "ipad-2", [1024, 768], [1280, 720]];

  viewportSizes.forEach((viewportSize) => {
    it(`${viewportSize}: Verifies page loads and shows the headers and links`, () => {
      if (Cypress._.isArray(viewportSize)) {
        cy.viewport(viewportSize[0], viewportSize[1]);
      } else {
        cy.viewport(viewportSize as Cypress.ViewportPreset);
      }

      cy.visit("/publications");

      cy.checkLinksInPage("main");
      cy.checkInvalidImages();

      cy.get("h1").should("contain", "Publications");
      cy.get("h4").should("contain", "We love to be transparent with you.");

      // TODO: Verify expected documents are displayed, i.e. annual reports, manifesto, etc.
    });
  });
});
