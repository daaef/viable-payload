describe("Should check the 404 not found", () => {
  const viewportSizes = ["iphone-8", "ipad-2", [1024, 768], [1280, 720]];

  viewportSizes.forEach((viewportSize) => {
    it(`${viewportSize}: Checks the request error 404 has the right message and image`, () => {
      if (Cypress._.isArray(viewportSize)) {
        cy.viewport(viewportSize[0], viewportSize[1]);
      } else {
        cy.viewport(viewportSize as Cypress.ViewportPreset);
      }

      // Let the test continue if the error is NEXT_NOT_FOUND which is the 404 error, fail the test if it's another error
      cy.on("uncaught:exception", (err, runnable) => {
        return !err.message.includes("NEXT_NOT_FOUND");
      });

      cy.visit({
        url: "/not-found-page",
        failOnStatusCode: false,
      });

      cy.checkLinksInPage('div[id="not-found-page"]');
      cy.checkInvalidImages();

      cy.get('img[data-testid="not-found-image"]')
        .should("have.attr", "src")
        .should("include", "not-found-404.png");
      cy.get("h1").should("contain", "OOPS!");
      cy.get("h2").should("contain", "Looks like big foot has broken the link");
      cy.get('a[data-testid="back-to-homepage"]').should(
        "contain",
        "Back to homepage",
      );
    });
  });
});
