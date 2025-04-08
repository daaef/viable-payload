/// <reference types="cypress" />
export {};

declare global {
  namespace Cypress {
    interface Chainable {
      checkInvalidImages(): Chainable<void>;
      checkLinksInPage(parentElement: string): Chainable<void>;
    }
  }
}
