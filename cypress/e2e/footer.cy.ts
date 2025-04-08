describe("Will load the homepage to verify the footer", () => {
  const viewportSizes = ["iphone-8", "ipad-2", [1024, 768], [1280, 720]];

  viewportSizes.forEach((viewportSize) => {
    it(`${viewportSize}: Verifies the footer has the logo, social links and pages links`, () => {
      if (Cypress._.isArray(viewportSize)) {
        cy.viewport(viewportSize[0], viewportSize[1]);
      } else {
        cy.viewport(viewportSize as Cypress.ViewportPreset);
      }

      cy.visit("/");

      cy.checkLinksInPage("footer");
      cy.get("footer").should("be.visible");

      // Support
      cy.get('[data-testid="footer-links"]')
        .find("a[href='/partner']")
        .should("be.visible")
        .should("contain", "Become a Partner");
      cy.get('[data-testid="footer-links"]')
        .find("a[href='/volunteer']")
        .should("be.visible")
        .should("contain", "Work with Us");
      cy.get('[data-testid="footer-links"]')
        .find(
          "a[href='https://donate.stripe.com/00g4gO8Dy63Z5I49AA?locale=en&__embed_source=buy_btn_1NJWzaI1MhxoVUFefylQgKVx']",
        )
        .should("be.visible")
        .should("contain", "Donate");

      // About
      cy.get('[data-testid="footer-links"]')
        .find("a[href='/about-us']")
        .should("be.visible")
        .should("contain", "Mission");

      cy.get('[data-testid="footer-links"]')
        .find("a[href='/meet-our-team']")
        .should("be.visible")
        .should("contain", "Our Team");

      cy.get('[data-testid="footer-links"]')
        .find("a[href='/publications']")
        .should("be.visible")
        .should("contain", "Publications");

      cy.get('[data-testid="footer-links"]')
        .find("a[href='/contact-us']")
        .should("be.visible")
        .should("contain", "Contact us");

      cy.get('[data-testid="footer-links"]')
        .find("a[href='/contact-us#faq-sections']")
        .should("be.visible")
        .should("contain", "FAQs");

      // Bottom
      cy.get('[data-testid="footer-copyright"]')
        .should("be.visible")
        .should("contain", "2024 Viable Community");

      cy.get('[data-testid="footer-privacy-policy-link"]')
        .should("not.be.disabled")
        .invoke("attr", "href")
        .should("contain", "/privacy-policy");

      cy.get('[data-testid="footer-privacy-terms-of-use"]')
        .should("not.be.disabled")
        .invoke("attr", "href")
        .should("contain", "/terms-of-use");

      cy.get('[data-testid="footer-linkedin"]')
        .should("not.be.disabled")
        .invoke("attr", "href")
        .should("contain", "linkedin")
        .and("contain", "viable-community");

      cy.get('[data-testid="footer-x"]')
        .should("not.be.disabled")
        .invoke("attr", "href")
        .should("contain", "x.com")
        .and("contain", "ViableCommunity");
    });
  });
});
