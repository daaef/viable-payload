describe("Should load 'Partnership' page", () => {
  const viewportSizes = ["iphone-8", "ipad-2", [1024, 768], [1280, 720]];

  viewportSizes.forEach((viewportSize) => {
    it(`${viewportSize}: Verifies page loads and shows the headers and links`, () => {
      if (Cypress._.isArray(viewportSize)) {
        cy.viewport(viewportSize[0], viewportSize[1]);
      } else {
        cy.viewport(viewportSize as Cypress.ViewportPreset);
      }

      cy.visit("/partner");

      cy.checkLinksInPage("main");
      cy.checkInvalidImages();

      cy.get("h1").should("contain", "Partnership");

      cy.get("h2").should("contain", "Become a Partner");
      cy.get("h2").should("contain", "Profit of Partnership");
      cy.get("h2").should("contain", "Type of Partnership");
      cy.get("h2").should("contain", "Testimonials");
      cy.get('button[data-testid="toggle-testimonial-content"]').click();

      // Link to Contact Us
      cy.contains("a", "Contact Form")
        .should("be.visible")
        .invoke("attr", "href")
        .should("equal", "/contact-us");
    });
  });
});
