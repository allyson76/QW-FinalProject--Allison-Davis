/// <reference types="cypress"/>
import Auth from '../page/login.page'
import loginData from '../data/loginData'
import AddToCart from '../page/addtocart.page'

describe('Add To Cart', () => {
  beforeEach(() => {
    cy.visit('/')
    Auth.loginUser(loginData.validuser.email, loginData.validuser.password)

  })

  it('add a single item to cart', () => {
    cy.get(AddToCart.productName).should('exist')
    cy.get(AddToCart.addtoCartBtn).scrollIntoView()
    cy.wait(1500)
    cy.get(AddToCart.addtoCartBtn).should('be.visible').click()
    cy.wait(3500)
    cy.get(AddToCart.cart).contains('30.00')
  })

  it('add multiple items to cart', () => {
    cy.get(AddToCart.product1Name).should('exist')
    cy.get(AddToCart.addtoCartBtn1).scrollIntoView()
    cy.wait(1500)
    cy.get(AddToCart.addtoCartBtn1).should('be.visible').click()

    cy.get(AddToCart.product2Name).should('exist')
    cy.get(AddToCart.addtoCartBtn2).scrollIntoView()
    cy.wait(1500)
    cy.get(AddToCart.addtoCartBtn2).should('be.visible').click()

    cy.get(AddToCart.product3Name).should('exist')
    cy.get(AddToCart.addtoCartBtn3).scrollIntoView()
    cy.wait(1500)
    cy.get(AddToCart.addtoCartBtn3).should('be.visible').click()
    cy.get(AddToCart.contnshopBtn).should('exist')

  })

  it.only('add multiple quantity of an item to cart', () => {
    cy.get(AddToCart.productName).should('exist')
    cy.get(AddToCart.addtoCartBtn).scrollIntoView()
    cy.wait(1500)
    cy.get(AddToCart.increaseBtn).should('be.visible').click()
    cy.get(AddToCart.increaseBtn).click()
    cy.get(AddToCart.addtoCartBtn).should('be.visible').click()
    cy.wait(3500)
    cy.get(AddToCart.cart).contains('90.00')
  })
})