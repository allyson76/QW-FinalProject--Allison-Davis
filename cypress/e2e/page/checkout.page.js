class Checkout {
  //Checkout single item
  get checkoutBtn() { return ('.snipcart-base-button__label') }
  get inputFullname() { return ('input[name="name"]') }
  get inputEmail() { return ('input[name="email"]') }
  get inputCity() { return ('input[name="city"]') }
  get inputCountry() { return ('.snipcart-typeahead input') }
  get inputZipcode() { return ('input[name="postalCode"]') }
  get paymentBtn() { return ('button[type="submit"]') }


  checkoutUser(fullname, emailA, city, zip) {
    cy.get(this.checkoutBtn).click()
    cy.get(this.inputFullname).type(fullname)
    cy.get(this.inputEmail).type(emailA)
    cy.get(this.inputCity).type(city)
    cy.get(this.inputCountry).eq(0).type('United States{enter}', { force: true })
    cy.get(this.inputZipcode).type(zip)
    cy.get(this.paymentBtn).click()
  }

  get cardNum() { return ('#card-number') }
  get expiryDate() { return ('#expiry-date') }
  get cvvNum() { return ('#cvv') }
  get placeOrderBtn() { return ('.snipcart-base-button__label') }
  get thnkyouMsg() { return ('div[class="snipcart__box--title"] div h1[class="snipcart__font--subtitle"]') }

  payment(expiry, cvv) {
    cy.iframe('.snipcart-payment-card-form iframe').find(this.cardNum).type('8900 8900 8900 8900')
    cy.get(this.expiryDate).type(expiry)
    cy.get(this.cvvNum).type(cvv)
  }



  //invalid Checkout
  get errorEmail() { return ('div[data-for="email"]') }


}
export default new Checkout()