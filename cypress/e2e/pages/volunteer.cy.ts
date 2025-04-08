describe("Should load 'Volunteer' page", () => {
  const viewportSizes = ["iphone-8", "ipad-2", [1024, 768], [1280, 720]];

  viewportSizes.forEach((viewportSize) => {
    it(`${viewportSize}: Verifies page loads and shows the headers and links`, () => {
      if (Cypress._.isArray(viewportSize)) {
        cy.viewport(viewportSize[0], viewportSize[1]);
      } else {
        cy.viewport(viewportSize as Cypress.ViewportPreset);
      }

      cy.visit("/volunteer");

      cy.checkLinksInPage("main");
      cy.checkInvalidImages();

      cy.get("h1").should("contain", "Volunteer with us");
      cy.get("h2").should("contain", "Join us!");
      cy.get("h4").should("contain", "Become a Volunteer");
      // Link to Our vacancies
      cy.contains("a", "Current vacancies")
        .should("be.visible")
        .invoke("attr", "href")
        .should(
          "equal",
          "https://www.volunteerthehague.nl/o/Viable-Community/opportunities",
        );
    });
  });
});
