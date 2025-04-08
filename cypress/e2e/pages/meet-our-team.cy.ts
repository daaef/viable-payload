describe("Should load 'Meet Our Team' page", () => {
  const viewportSizes = ["iphone-8", "ipad-2", [1024, 768], [1280, 720]];

  viewportSizes.forEach((viewportSize) => {
    it(`${viewportSize}: Verifies page loads, shows the headers and circle links`, () => {
      if (Cypress._.isArray(viewportSize)) {
        cy.viewport(viewportSize[0], viewportSize[1]);
      } else {
        cy.viewport(viewportSize as Cypress.ViewportPreset);
      }

      cy.visit("/meet-our-team");

      cy.get("h1").should("contain", "Meet our team");

      cy.get("div#circle-members-list")
        .find("div[data-testid]")
        .should("not.exist");

      cy.get("div#circles-selector > button").first().click();

      cy.get("div#circle-members-list")
        .find("div[data-testid]")
        .should("be.visible");

      cy.get("h2").should("contain", "circle");
    });
  });

  const circles = [
    "Strategic",
    "Project development",
    "Outreach & Communications",
    "People",
    "Finance",
    "IT",
    "Daily Operations",
  ];

  circles.forEach((circle) => {
    it(`Select the ${circle} circle and check all the images load`, () => {
      cy.visit("/meet-our-team");

      cy.get(`div#circles-selector > button[value="${circle}"]`).click();

      cy.get("div#circle-members-list")
        .find("div[data-testid]")
        .should("be.visible");

      cy.get("h2").should("contain", `${circle} circle`);
      cy.checkInvalidImages();
    });
  });
});
