describe("Will load the homepage to verify the header", () => {
  const smallViewportSizes = ["iphone-8", "iphone-x", "iphone-xr", "ipad-2"];

  smallViewportSizes.forEach((viewportSize) => {
    it(`${viewportSize}: Verifies the header has the mobile menu and logo`, () => {
      if (Cypress._.isArray(viewportSize)) {
        cy.viewport(viewportSize[0], viewportSize[1]);
      } else {
        cy.viewport(viewportSize as Cypress.ViewportPreset);
      }

      cy.visit("");

      cy.checkLinksInPage("header");
      cy.get("nav").should("be.visible");

      cy.get('[data-testid="header-logo-link"]')
        .should("be.visible")
        .get("img")
        .should("have.attr", "src", "/viableLogo.svg")
        .should("be.visible");

      cy.get('[data-testid="header-mobile-menu-button"]')
        .should("be.visible")
        .click();
      cy.get('[data-testid="mobile-menu-dialog-header"]').should("be.visible");
      cy.get('[data-testid="mobile-menu-dialog"]').should("be.visible");
    });
  });

  const viewportSizes = [
    [1024, 768],
    "macbook-11",
    "macbook-13",
    "macbook-15",
    "macbook-16",
  ];

  viewportSizes.forEach((viewportSize) => {
    it(`${viewportSize}: Verifies the header has the logo, menu with all pages and donate button`, () => {
      if (Cypress._.isArray(viewportSize)) {
        cy.viewport(viewportSize[0], viewportSize[1]);
      } else {
        cy.viewport(viewportSize as Cypress.ViewportPreset);
      }

      cy.visit("");

      cy.get("nav").should("be.visible");

      // Viable logo
      cy.get('[data-testid="header-logo-link"]')
        .should("be.visible")
        .get("img")
        .should("have.attr", "src", "/viableLogo.svg")
        .should("be.visible");

      // Link to homepage
      cy.contains("a", "Home")
        .should("be.visible")
        .invoke("attr", "href")
        .should("equal", "/");

      // About Us menu
      cy.contains("button", "About Us")
        .should("be.visible")
        .trigger("mouseover");
      cy.get("div[data-testid='about-us-desktop-popover']").should(
        "be.visible",
      );

      cy.contains("a", "Who are we?")
        .should("be.visible")
        .invoke("attr", "href")
        .should("equal", "/about-us");

      cy.contains("a", "Our Work")
        .should("be.visible")
        .invoke("attr", "href")
        .should("equal", "/our-work");

      cy.contains("a", "Meet our team")
        .should("be.visible")
        .invoke("attr", "href")
        .should("equal", "/meet-our-team");

      cy.contains("a", "Publications")
        .should("be.visible")
        .invoke("attr", "href")
        .should("equal", "/publications");

      cy.contains("button", "About Us").trigger("mouseout");
      cy.get("div[data-testid='about-us-desktop-popover']").should("not.exist");

      // Act Now menu
      cy.contains("button", "Act Now")
        .should("be.visible")
        .trigger("mouseover");
      cy.get("div[data-testid='act-now-desktop-popover']").should("be.visible");

      cy.contains("a", "Donate")
        .should("be.visible")
        .invoke("attr", "href")
        .should(
          "equal",
          "https://donate.stripe.com/00g4gO8Dy63Z5I49AA?locale=en&__embed_source=buy_btn_1NJWzaI1MhxoVUFefylQgKVx",
        );

      cy.contains("a", "Become a Partner")
        .should("be.visible")
        .invoke("attr", "href")
        .should("equal", "/partner");

      cy.contains("a", "Become a Volunteer")
        .should("be.visible")
        .invoke("attr", "href")
        .should("equal", "/volunteer");

      cy.contains("button", "Act Now").should("be.visible").trigger("mouseout");
      cy.get("div[data-testid='act-now-desktop-popover']").should("not.exist");

      // Link to Contact Us
      cy.contains("a", "Contact Us")
        .should("be.visible")
        .invoke("attr", "href")
        .should("equal", "/contact-us");

      // Find a link with an href attribute containing "donate"
      cy.get('[data-testid="header-donate-button"]').should("not.be.disabled");
    });
  });
});
