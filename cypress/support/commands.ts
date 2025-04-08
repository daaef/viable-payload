/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add("checkInvalidImages", () => {
  const imagesWithoutAlt: string[] = [];
  cy.get("img")
    .each(($el, k) => {
      cy.wrap($el).scrollIntoView();
      cy.wait(300);
      if (!$el.attr("alt")) {
        const id = $el.attr("id");
        const alt = $el.attr("alt");
        const src = $el.attr("src");
        const info = `${id ? "#" + id : ""} src:${src ?? "none;"} alt:${alt ?? "none;"}`;
        imagesWithoutAlt.push(info);
        cy.log(`No Alt image ${k + 1}: ${info}`);
      }
    })
    .then(() => {
      // report all broken images at once
      if (imagesWithoutAlt.length) {
        throw new Error(
          `Found ${
            imagesWithoutAlt.length
          } images without alt\n${imagesWithoutAlt.join(", ")}`,
        );
      }
    });

  const brokenImages: string[] = [];
  cy.get("img")
    .each(($el, k) => {
      const imageIsNotHidden =
        $el.css("display") !== "none" && $el.is(":visible");
      if (imageIsNotHidden) {
        cy.wrap($el).scrollIntoView();
        cy.wait(100);
        if ($el.prop("naturalWidth") === 0) {
          const id = $el.attr("id");
          const alt = $el.attr("alt");
          const src = $el.attr("src");
          const info = `${id ? "#" + id : ""} src:${src ?? "none;"} alt:${alt ?? "none;"}`;
          brokenImages.push(info);
          cy.log($el.prop("naturalWidth"));
          cy.log(`Broken image ${k + 1}: ${info}`);
        }
      }
    })
    .then(() => {
      // report all broken images at once
      if (brokenImages.length) {
        throw new Error(
          `Found ${
            brokenImages.length
          } broken images\n${brokenImages.join(", ")}`,
        );
      }
    });
});

Cypress.Commands.add("checkLinksInPage", (parentElement: string) => {
  const emptyLinks: string[] = [];
  const faultyLinks: string[] = [];

  cy.get(parentElement)
    .find("a[href]")
    .each(($el, k) => {
      const id = $el.attr("id");
      const linkText = $el.text();
      const href = $el.attr("href") ?? "";
      if (!href) {
        const info = `${id ? "#" + id : ""} href:none; linkText:${linkText ?? "none;"}`;
        emptyLinks.push(info);
        cy.log(`No HREF link ${k + 1}: ${info}`);
      } else if (!href.startsWith("mailto:") && !href.startsWith("tel:")) {
        cy.request(href).then((response) => {
          if (response.status >= 400) {
            const info = `${id ? "#" + id : ""} href:${href}; linkText:${linkText ?? "none;"}`;
            faultyLinks.push(href);
            cy.log(
              `HREF link ${k + 1}: ${info} with status ${response.status}`,
            );
          }
        });
      }
    })
    .then(() => {
      // report all broken links at once
      if (emptyLinks.length) {
        throw new Error(
          `Found ${emptyLinks.length} links without href\n${emptyLinks.join(", ")}`,
        );
      }
      if (faultyLinks.length) {
        throw new Error(
          `Found ${faultyLinks.length} links with error response\n${faultyLinks.join(", ")}`,
        );
      }
    });
});
