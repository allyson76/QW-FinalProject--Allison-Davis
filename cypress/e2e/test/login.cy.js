/// <reference types="cypress"/>
import Login from '../page/login.page'
import loginData from '../data/loginData'

describe('Authentication', () => {
  beforeEach(() => {
    cy.visit('/')

  })

  it('should login with valid credentials', () => {
    // cy.origin("https://dev-mlluudmotpwoldtv.us.auth0.com", { args: {} }, ({ }) => {
    Login.loginUser(loginData.validuser.email, loginData.validuser.password)
    // }
    // )
  })

  it('should login with invalid credentials', () => {
    Login.loginUser(loginData.invaliduser.email, loginData.invaliduser.password)
    cy.get(Login.errmessage)
      .should('be.visible')
      .and('have.text', loginData.invaliduser.message)
  })

  it('should login with google account', () => {
    // cy.get(Login.googleBtn).should('be.visible')
    Login.googleLogin(loginData.googlelogin.email, loginData.googlelogin.password)
  })

  // it.only('should sign up with valid credentials', () => {
  //   Login.loginUser(loginData.invaliduser.email, loginData.invaliduser.password)
  //   cy.get(Login.errmessage)
  //     .should('be.visible')
  //     .and('have.text', loginData.invaliduser.message)
  // })


})
