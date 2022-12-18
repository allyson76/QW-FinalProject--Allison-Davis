/// <reference types="cypress"/>
import Auth from '../page/login.page'
import loginData from '../data/loginData'
import AddToCart from '../page/addtocart.page'
import ProductGallery from '../page/productGallery.page'

describe('Product Gallery', () => {
  beforeEach(() => {
    cy.visit('/')
    Auth.loginUser(loginData.validuser.email, loginData.validuser.password)

  })

  it('Should be able to view multiple images on hover-single product', () => {
    cy.url().should('contain', '/products')
    cy.get(ProductGallery.productTitle).should('exist')
    cy.get(ProductGallery.productName).scrollIntoView()
    cy.wait(1500)
    cy.get(ProductGallery.image1).should('be.visible')
    cy.wait(5500)
    cy.get(ProductGallery.image2).should('be.visible').rightclick()
  })


  it.skip('Should be able to view multiple images on hover-multiple products', () => {
    cy.url().should('contain', '/products')
    cy.get(ProductGallery.productTitle).should('exist')
    cy.get(ProductGallery.productName).scrollIntoView()
    cy.wait(1500)
    cy.get(ProductGallery.image1).should('be.visible')
    cy.get(ProductGallery.image2).should('be.visible').hover()
  })
})