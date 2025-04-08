describe("Should load 'Contact Us' page", () => {
  const viewportSizes = ["iphone-8", "ipad-2", [1024, 768], [1280, 720]];

  viewportSizes.forEach((viewportSize) => {
    it(`${viewportSize}: Verifies page loads and shows the headers and links`, () => {
      if (Cypress._.isArray(viewportSize)) {
        cy.viewport(viewportSize[0], viewportSize[1]);
      } else {
        cy.viewport(viewportSize as Cypress.ViewportPreset);
      }

      cy.visit("/contact-us");

      cy.checkLinksInPage("main");
      cy.checkInvalidImages();

      cy.get("h1").should("contain", "Contact Us");

      cy.get("h2").should("contain", "Contact Form");
      cy.get("input[name=firstName]")
        .should("be.visible")
        .should("have.attr", "required");
      cy.get("input[name=lastName]")
        .should("be.visible")
        .should("have.attr", "required");
      cy.get("input[name=email]")
        .should("be.visible")
        .should("have.attr", "required");
      cy.get("input[name=phone]").should("be.visible");
      cy.get("select[name=subject]").should("be.visible");
      cy.get("textarea[name=comments]")
        .should("be.visible")
        .should("have.attr", "required");
      cy.get("input[name='acceptTermsAndPolicy']")
        .should("be.visible")
        .should("have.attr", "required");
      cy.get("input[name='receiveNewsletter']").should("be.visible");
      cy.get("button[type=submit]").should("be.visible");

      cy.get("h3").should("contain", "Address");

      cy.get("h3").should("contain", "Frequently Asked Questions (FAQs)");

      cy.contains("button", "General").should("be.visible");
      cy.get("#general-faq").should("be.visible");
      cy.get("#general-questions").find("button:first").click();

      cy.contains("button", "Volunteering").click();
      cy.get("#volunteering-faq").should("be.visible");
      cy.get("#volunteering-questions").find("button:first").click();

      cy.contains("button", "The Problem").click();
      cy.get("#the-problem-faq").should("be.visible");
      cy.get("#the-problem-questions").find("button:first").click();

      cy.contains("button", "Ways to Contribute").click();
      cy.get("#ways-to-contribute-faq").should("be.visible");
      cy.get("#ways-to-contribute-questions").find("button:first").click();

      cy.visit("/submit-text");

      cy.checkInvalidImages();
    });
  });

  // To run this test against your local environment, make sure to adjust your `.env.local` CONTACT_US_DEBUG_MODE=1
  // and add your email to the CONTACT_US_DEBUG_EMAIL variable, then remove the `.skip` from the test below.
  // We don't want this enabled in the CI/CD pipeline, as it will send create a lead in Salesforce.
  it.skip(`Fills in and submits the contact form`, () => {
    cy.visit("/contact-us");

    cy.get("form").should("be.visible");
    cy.get("input[name=firstName]")
      .should("be.visible")
      .should("not.be.disabled");
    cy.get("input[name=lastName]")
      .should("be.visible")
      .should("not.be.disabled");
    cy.get("input[name=email]").should("be.visible").should("not.be.disabled");
    cy.get("input[name=phone]").should("be.visible").should("not.be.disabled");
    cy.get("select[name=subject]")
      .should("be.visible")
      .should("not.be.disabled");
    cy.get("textarea[name=comments]")
      .should("be.visible")
      .should("not.be.disabled");
    cy.get("input[name='acceptTermsAndPolicy']")
      .should("be.visible")
      .should("not.be.disabled");
    cy.get("input[name='receiveNewsletter']")
      .should("not.be.disabled")
      .should("be.visible");
    cy.get("button[type=submit]")
      .should("not.be.disabled")
      .should("be.visible");

    cy.get("input[name=firstName]").type("John");
    cy.get("input[name=lastName]").type("Doe");
    cy.get("input[name=email]").type("john@doe.com");
    cy.get("input[name=phone]").type("123-456-7890");
    cy.get("select[name=subject]").select("Volunteering");
    cy.get("select[name=subject]").select("Investing");
    cy.get("select[name=subject]").select("Funding");
    cy.get("select[name=subject]").select("Donating");
    cy.get("select[name=subject]").select("Other");
    cy.get("textarea[name=comments]").type(
      "I have other questions not related to the other subjects.",
    );
    cy.get("input[name='acceptTermsAndPolicy']").check();
    cy.get("input[name='receiveNewsletter']").check();
    cy.get("button[type=submit]").click();

    cy.get("h1").should("contain", "Thank You!");
  });
});
