/// <reference types="cypress"/>
import Auth from '../page/login.page'
import loginData from '../data/loginData'
import AddToCart from '../page/addtocart.page'
import Cart from '../page/cart.page'
import Checkout from '../page/checkout.page'


describe('Checkout', () => {
  beforeEach(() => {
    cy.visit('/')
    Auth.loginUser(loginData.validuser.email, loginData.validuser.password)
  })

  it.only('checkout an item', () => {
    cy.get(AddToCart.productName).should('exist')
    cy.get(AddToCart.addtoCartBtn).scrollIntoView()
    cy.wait(1500)
    cy.get(AddToCart.addtoCartBtn).should('be.visible').click()
    cy.wait(3500)
    cy.get(AddToCart.cart).click()
    cy.wait(3500)
    cy.get(Cart.totalBtn).contains('30.00')
    cy.get(Checkout.checkoutBtn).click()

    Checkout.checkoutUser('Allison Davis', 'kirk_adams20@yopmail.com', 'Santa', '29577')
    cy.get(Checkout.paymentBtn).click()
    cy.get(Checkout.paymentBtn).click()
    cy.wait(1500)
    Checkout.payment('1425', '123')
    cy.get(Checkout.placeOrderBtn).click()
    cy.get(Checkout.thnkyouMsg).should('exist')
  })

  it('checkout multiple items', () => {
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

      cy.get(Checkout.checkoutBtn).click()

      Checkout.checkoutUser('Allison Davis', 'kirk_adams20@yopmail.com', 'Santa', '29577')
      cy.get(Checkout.paymentBtn).click()
      cy.get(Checkout.paymentBtn).click()
      cy.wait(1500)
      Checkout.payment('1425', '123')
      cy.get(Checkout.placeOrderBtn).click()
      cy.get(Checkout.thnkyouMsg).should('exist')

    })
  })

  it('invalid checkout', () => {
    cy.get(AddToCart.productName).should('exist')
    cy.get(AddToCart.addtoCartBtn).scrollIntoView()
    cy.wait(1500)
    cy.get(AddToCart.addtoCartBtn).should('be.visible').click()
    cy.wait(3500)
    cy.get(AddToCart.cart).click()
    cy.wait(3500)
    cy.get(Cart.totalBtn).contains('30.00')
    cy.get(Checkout.checkoutBtn).click()

    Checkout.checkoutUser('Allison Davis', 'ki', 'Santa', '29577')
    cy.get(Checkout.paymentBtn).click()
    cy.get(Checkout.errorEmail).should('exist')

  })

})