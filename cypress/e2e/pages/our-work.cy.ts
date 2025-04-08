const viewportSizes = ["iphone-8", "ipad-2", [1024, 768], [1280, 720]];

describe("Should load 'Our work' page", () => {
  viewportSizes.forEach((viewportSize) => {
    it(`${viewportSize}: Verifies page loads and shows the headers`, () => {
      if (Cypress._.isArray(viewportSize)) {
        cy.viewport(viewportSize[0], viewportSize[1]);
      } else {
        cy.viewport(viewportSize as Cypress.ViewportPreset);
      }

      cy.visit("/our-work");

      cy.checkLinksInPage("main");
      cy.checkInvalidImages();

      cy.get("h1").should("contain", "Our Work");

      cy.get("h2").should(
        "contain",
        "Our projects exhibit a wide range of scope and approaches.",
      );

      cy.get("h2").should("contain", "How Are We Funded?");
      cy.get("h2").should("contain", "Funding Sources");
      cy.get("h2").should("contain", "Rewarding Impact");
    });
  });
});

describe("Should load 'Educational' page", () => {
  viewportSizes.forEach((viewportSize) => {
    it(`${viewportSize}: Verifies "Educational" page loads`, () => {
      if (Cypress._.isArray(viewportSize)) {
        cy.viewport(viewportSize[0], viewportSize[1]);
      } else {
        cy.viewport(viewportSize as Cypress.ViewportPreset);
      }

      cy.visit("/our-work/educational");

      cy.checkInvalidImages();

      cy.get("h1").should("contain", "Educational");

      cy.get("h2").should("contain", "Project Educational Videos");
      cy.get("h3").should(
        "contain",
        "Exploring Sustainable Living Through Educational Videos",
      );
      cy.get("h3").should(
        "contain",
        "Join Us in Promoting Environmental Awareness",
      );
    });
  });
});

describe("Should load 'Extremadura' page", () => {
  viewportSizes.forEach((viewportSize) => {
    it(`${viewportSize}: Verifies "Extremadura" page loads`, () => {
      if (Cypress._.isArray(viewportSize)) {
        cy.viewport(viewportSize[0], viewportSize[1]);
      } else {
        cy.viewport(viewportSize as Cypress.ViewportPreset);
      }

      cy.visit("/our-work/extremadura");

      cy.checkInvalidImages();

      cy.get("h1").should("contain", "Extremadura");

      cy.get("h2").should("contain", "Why do we do it?");
      cy.get("h2").should("contain", "What do we do?");
      cy.get("h2").should("contain", "Impact Areas");
    });
  });
});
