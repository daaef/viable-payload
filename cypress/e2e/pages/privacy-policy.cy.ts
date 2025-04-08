describe("Should load 'Privacy Policy' page", () => {
  const viewportSizes = ["iphone-8", "ipad-2", [1024, 768], [1280, 720]];

  viewportSizes.forEach((viewportSize) => {
    it(`${viewportSize}: Verifies page loads and shows the headers and links`, () => {
      if (Cypress._.isArray(viewportSize)) {
        cy.viewport(viewportSize[0], viewportSize[1]);
      } else {
        cy.viewport(viewportSize as Cypress.ViewportPreset);
      }

      cy.visit("/privacy-policy");

      cy.checkLinksInPage("main");
      cy.checkInvalidImages();

      cy.get("h1").should("contain", "Privacy Policy");

      cy.get("h2").should("contain", "Introduction");
      cy.get("h2").should(
        "contain",
        "What type of information is collected from you?",
      );

      cy.contains("a", "info@viable.community")
        .should("be.visible")
        .invoke("attr", "href")
        .should("contain", "mailto:info@viable.community");
    });
  });
});
