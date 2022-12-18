/// <reference types="cypress"/>
import Auth from '../page/login.page'
import loginData from '../data/loginData'
import AddToCart from '../page/addtocart.page'
import ProductDetail from '../page/productDetails.page'

describe('Product Detail', () => {
  beforeEach(() => {
    cy.visit('/')
    Auth.loginUser(loginData.validuser.email, loginData.validuser.password)

  })

  it('Should be able to view images for a product', () => {
    cy.url().should('contain', '/products')
    cy.get(ProductDetail.productTitle).should('exist')
    cy.get(ProductDetail.productName).scrollIntoView()
    cy.get(ProductDetail.productName).should('contain', 'Quality Fitted Hat')
    cy.wait(1500)
    cy.get(ProductDetail.image1).should('be.visible').click()
    cy.wait(1500)
    //cy.get(ProductDetail.slideSelect).should('be.visible')
    cy.get(ProductDetail.nxtDot).should('be.visible').click()
    cy.get(ProductDetail.image2).should('be.visible').click()
    //cy.get(ProductDetail.slideSelect).should('have.text', 'Image 1')
  })


  it('Should be able to view images for multiple products', () => {
    cy.url().should('contain', '/products')
    cy.get(ProductDetail.productTitle).should('exist')
    cy.get(ProductDetail.productName).scrollIntoView()
    cy.get(ProductDetail.productName).should('contain', 'Quality Fitted Hat')
    cy.wait(1500)
    cy.get(ProductDetail.image1).should('be.visible').click()
    cy.wait(1500)
    //cy.get(ProductDetail.slideSelect).should('be.visible')
    cy.get(ProductDetail.nxtDot).should('be.visible').click()
    cy.get(ProductDetail.image2).should('exist')
    cy.get(ProductDetail.backBtn).click()

    cy.get(ProductDetail.product2Name).scrollIntoView()
    cy.get(ProductDetail.product2Name).should('contain', 'Quality Mousepad')
    cy.wait(1500)
    cy.get(ProductDetail.item2Image1).should('be.visible').click()
    cy.wait(1500)
    cy.url().should('contain', '/products/quality-mousepad')
    //cy.get(ProductDetail.slideSelect).should('be.visible')
    cy.get(ProductDetail.image2).click()
    //cy.get(ProductDetail.slideSelect).should('have.text', 'Image 2')
  })

  it('Should be able to view related products', () => {
    cy.url().should('contain', '/products')
    cy.get(ProductDetail.productTitle).should('exist')
    cy.get(ProductDetail.productName).scrollIntoView()
    cy.get(ProductDetail.itemCategory).should('contain', 'Hat')
    cy.wait(1500)
    cy.get(ProductDetail.image1).should('be.visible').click()
    cy.wait(1500)
    cy.url().should('contain', '/products/quality-hat')
    //cy.get(ProductDetail.slideSelect).should('have.text', 'Image 1')
    cy.get(ProductDetail.relatedTitle).should('exist')
    cy.get(ProductDetail.rltdProdImage).click()
    cy.get(ProductDetail.rltdCategory).should('contain', 'Hat')
  })
})