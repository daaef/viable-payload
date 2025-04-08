describe("Should load home page", () => {
  const viewportSizes = ["iphone-8", "ipad-2", [1024, 768], [1280, 720]];

  viewportSizes.forEach((viewportSize) => {
    it(`${viewportSize}: Verifies the header, donate button and HTTP headers`, () => {
      if (Cypress._.isArray(viewportSize)) {
        cy.viewport(viewportSize[0], viewportSize[1]);
      } else {
        cy.viewport(viewportSize as Cypress.ViewportPreset);
      }

      cy.intercept("GET", "/", (req) => {
        req.continue((res) => {
          expect(res.headers).to.have.property("content-security-policy");
          expect(res.headers["content-security-policy"]).to.include(
            "script-src 'self'",
          );
          expect(res.headers["content-security-policy"]).to.include(
            "style-src 'self'",
          );
          expect(res.headers["content-security-policy"]).to.include(
            "img-src 'self'",
          );
          expect(res.headers).to.have.property(
            "x-content-type-options",
            "nosniff",
          );
          expect(res.headers).to.have.property(
            "referrer-policy",
            "strict-origin-when-cross-origin",
          );
        });
      }).as("homepage");

      cy.visit("/");
      cy.wait("@homepage");

      cy.checkLinksInPage("main");
      cy.checkInvalidImages();

      cy.get("h1").should("contain", "Welcome to your Viable Community");

      // Find a link with a href attribute containing "donate" and click it
      cy.get('[data-testid="homepage-donate-button"]').should(
        "not.be.disabled",
      );
    });
  });
});
