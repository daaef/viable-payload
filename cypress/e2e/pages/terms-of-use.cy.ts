describe("Should load 'Terms of Use' page", () => {
  const viewportSizes = ["iphone-8", "ipad-2", [1024, 768], [1280, 720]];

  viewportSizes.forEach((viewportSize) => {
    it(`${viewportSize}: Verifies page loads and shows the headers and links`, () => {
      if (Cypress._.isArray(viewportSize)) {
        cy.viewport(viewportSize[0], viewportSize[1]);
      } else {
        cy.viewport(viewportSize as Cypress.ViewportPreset);
      }

      cy.visit("/terms-of-use");

      cy.checkLinksInPage("main");
      cy.checkInvalidImages();

      cy.get("h1").should("contain", "Terms and Conditions");

      cy.get("h2").should("contain", "1. General");
      cy.get("h2").should("contain", "2. Objectives and Activities");

      cy.contains("a", "Info@Viable.community")
        .should("be.visible")
        .invoke("attr", "href")
        .should("contain", "mailto:info@viable.community");
      cy.contains("a", "+316 44444247")
        .should("be.visible")
        .invoke("attr", "href")
        .should("contain", "tel:+31644444247");
      cy.contains("a", "+316 142434 06")
        .should("be.visible")
        .invoke("attr", "href")
        .should("contain", "tel:+31614243406");
    });
  });
});
