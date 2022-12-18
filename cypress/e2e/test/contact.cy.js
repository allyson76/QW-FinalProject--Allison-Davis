/// <reference types="cypress"/>
import Auth from '../page/login.page'
import loginData from '../data/loginData'
import Contact from '../page/contact.page'

describe('Authentication', () => {
  beforeEach(() => {
    cy.visit('/')

  })

  it('should login with valid credentials', () => {
    Auth.loginUser(loginData.validuser.email, loginData.validuser.password)
    cy.url().should('contain', '/products')
    cy.get(Contact.contactBtn).should('exist').click()
    Contact.contactQW('Ally', 'Biggs', 'adavis2yopmail.com', 'Happy', 'Great Bootcamp')
    cy.get(Contact.flashMsg).should('be.visible')
  })
})