/// <reference types="cypress"/>
import Auth from '../page/login.page'
import loginData from '../data/loginData'
import AddToCart from '../page/addtocart.page'
import Cart from '../page/cart.page'


describe('Cart', () => {
  beforeEach(() => {
    cy.visit('/')
    Auth.loginUser(loginData.validuser.email, loginData.validuser.password)
  })

  it('view total amount of item in cart', () => {
    cy.get(AddToCart.productName).should('exist')
    cy.get(AddToCart.addtoCartBtn).scrollIntoView()
    cy.wait(1500)
    cy.get(AddToCart.addtoCartBtn).should('be.visible').click()
    cy.wait(3500)
    //cy.get(AddToCart.cart).contains('30.00')
    cy.get(AddToCart.cart).click()
    // cy.get(Cart.cartTitle).should('be.visible')
    cy.wait(3500)
    //cy.get(Cart.quantity).should('have text', 1)
    //cy.get(Cart.itemName).should('have text', 'Quality Fitted Hat')
    cy.get(Cart.totalBtn).contains('30.00')
  })

  it('delete an item from the cart', () => {
    cy.get(AddToCart.productName).should('exist')
    cy.get(AddToCart.addtoCartBtn).scrollIntoView()
    cy.wait(1500)
    cy.get(AddToCart.addtoCartBtn).should('be.visible').click()
    cy.wait(3500)
    cy.get(AddToCart.cart).click()
    cy.get(Cart.cartTitle).should('be.visible')
    cy.wait(3500)
    cy.get(Cart.totalBtn).contains('30.00')
    cy.get(Cart.deleteBtn).click()
    cy.get(Cart.bkToStoreBtn).should('exist')
  })

  it.only('edit quantity of item in cart', () => {
    cy.get(AddToCart.productName).should('exist')
    cy.get(AddToCart.addtoCartBtn).scrollIntoView()
    cy.wait(1500)
    cy.get(AddToCart.addtoCartBtn).should('be.visible').click()
    cy.wait(3500)
    cy.get(AddToCart.cart).click()
    //cy.get(Cart.cartTitle).should('be.visible')
    cy.wait(3500)
    //cy.get(Cart.itemName).contains('Quality Fitted Hat')
    cy.get(Cart.increaseQuan).should('be.visible').click()
    cy.get(Cart.totalBtn).contains('60.00')
  })

})