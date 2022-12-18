class Cart {
  //View single item in cart
  get cartTitle() { return ('.snipcart-cart-header__title snipcart__font--black snipcart__font--secondary') }

  get quantity() { return ('[class="snipcart-cart-header__icon snipcart__icon"]') }

  get itemName() { return ('.snipcart-item-line__title.snipcart__font--xlarge.snipcart__font--secondary.snipcart__font--black') }

  get totalBtn() { return ('.snipcart-summary-fees__amount.snipcart-summary-fees__amount--highlight.snipcart__font--large') }

  //delete item from cart
  get deleteBtn() { return ('button[class= "snipcart-button-icon is-danger"]') }
  get bkToStoreBtn() { return ('button[class="snipcart-button-secondary snipcart-base-button is-fit-content is-icon-left"]') }


  //edit item in cart
  get increaseQuan() { return ('button[title="Increment quantity"]') }

}
export default new Cart()