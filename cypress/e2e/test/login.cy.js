/// <reference types="cypress"/>
import Auth from '../page/login.page'
import loginData from '../data/loginData'

describe('Authentication', () => {
  beforeEach(() => {
    cy.visit('/')

  })

  it('should login with valid credentials', () => {
    Auth.loginUser(loginData.validuser.email, loginData.validuser.password)
    cy.url().should('contain', '/products')
  })

  it('should login with invalid credentials', () => {
    Auth.loginUser(loginData.invaliduser.email, loginData.invaliduser.password)
    cy.get(Login.errmessage)
      .should('be.visible')
      .and('have.text', loginData.invaliduser.message)
  })

  it("should login with google account", () => {
    cy.visit("https://ui-automation-camp.vercel.app/");
    cy.get("#signInOrRegister").click();
    cy.get("[class='auth0-lock-social-button-text']").click();
    //Go to google site.
    cy.origin(
      "https://accounts.google.com",
      { args: {} },
      ({ }) => {
        cy.get('input[type="email"]').type("davisallison223@gmail.com");
        cy.get('button[class="VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc LQeN7 qIypjc TrZEUc lw1w4b"] div[class="VfPpkd-RLmnJb"]').click({ force: true })
        cy.get('input[name="password"]').type("Anything1340", { log: false });
        cy.get('div[id="passwordNext"] span').click();
      }
    )
  })

  it("should signup with google account", () => {
    cy.visit("https://ui-automation-camp.vercel.app/");
    cy.get("#signInOrRegister").click();
    cy.get('li:nth-child(2)').click()
    cy.get("[class='auth0-lock-social-button-text']").click();
    //Go to google site.
    cy.origin(
      "https://accounts.google.com",
      { args: {} },
      ({ }) => {
        cy.get('input[type="email"]').type("davisallison223@gmail.com");
        cy.get('button[class="VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc LQeN7 qIypjc TrZEUc lw1w4b"] div[class="VfPpkd-RLmnJb"]').click({ force: true })
        cy.get('input[name="password"]').type("Anything1340", { log: false });
        cy.get('div[id="passwordNext"] span').click();
      }
    )
  })

  it.skip('should sign up with valid credentials', () => {
    Auth.signupUser(loginData.validsignup.email, loginData.validsignup.password)
  })


})
