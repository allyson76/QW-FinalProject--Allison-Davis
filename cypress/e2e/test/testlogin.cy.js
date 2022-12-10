/// <reference types="cypress"/>

it("Login to platform", () => {
  cy.visit("https://ui-automation-camp.vercel.app/");
  cy.get("#signInOrRegister").click();
  //Login on to site.
  cy.origin(
    "https://dev-mlluudmotpwoldtv.us.auth0.com",
    { args: {} },
    ({ }) => {
      cy.get('[type="email"]').type("test1@tester.com");
      cy.get('[type="password"]').type("Password1", { log: false });
      cy.get("[name=submit]").click();
    }
  );
});