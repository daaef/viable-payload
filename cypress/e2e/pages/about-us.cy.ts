describe("Should load 'About us' page", () => {
  const viewportSizes = ["iphone-8", "ipad-2", [1024, 768], [1280, 720]];

  viewportSizes.forEach((viewportSize) => {
    it(`${viewportSize}: Verifies page loads and shows the headers and links`, () => {
      if (Cypress._.isArray(viewportSize)) {
        cy.viewport(viewportSize[0], viewportSize[1]);
      } else {
        cy.viewport(viewportSize as Cypress.ViewportPreset);
      }

      cy.visit("/about-us");

      cy.checkLinksInPage("main");
      cy.checkInvalidImages();

      cy.get("h1").should("contain", "Welcome to your Viable Community");

      cy.get("h2").should("contain", "Who are we?");
      cy.contains("a", "Meet the team").should("be.visible");

      cy.get("h2").should("contain", "Our Mission");
      cy.get("h2").should("contain", "Our Vision");
      cy.get("h2").should("contain", "What do we do?");
      cy.get("h2").should("contain", "How do we do it?");

      cy.get("h2").should(
        "contain",
        "Building a future where people and nature live in harmony",
      );
      cy.get("[data-testid='about-us-donate-button']").should("be.visible");

      cy.get("h2").should("contain", "Why do we do it");
      cy.contains("a", "Know our story").should("be.visible");

      cy.get("h2").should(
        "contain",
        "Which SGDs are we working towards and how?",
      );
    });
  });
});
