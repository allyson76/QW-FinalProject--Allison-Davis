class AddToCart {
  //Single item
  get productName() { return ('div[id="product-0"] p[class="chakra-text css-1n64n71"]') }

  get addtoCartBtn() { return ('.chakra-button.snipcart-add-item.css-betff9[data-item-id="quality-hat-model"]') }

  get cart() { return ('button[id="top-cart"]') }

  // Multiple items
  get product1Name() { return ('div[id="product-1"] p[class="chakra-text css-1n64n71"]') }
  get addtoCartBtn1() { return ('.chakra-button.snipcart-add-item.css-betff9[data-item-id="quality-hat"]') }

  get product2Name() { return ('div[id="product-4"] p[class="chakra-text css-1n64n71"]') }
  get addtoCartBtn2() { return ('.chakra-button.snipcart-add-item.css-betff9[data-item-id="quality-pillow"]') }

  get product3Name() { return ('div[id="product-6"] p[class="chakra-text css-1n64n71"]') }
  get addtoCartBtn3() { return ('.chakra-button.snipcart-add-item.css-betff9[data-item-id="quality-sweatshirt"]') }

  get contnshopBtn() { return ('.snipcart-modal__close-title.snipcart__font--std') }
  get cart() { return ('button[id="top-cart"]') }

  //Multiple quantity of an item
  get increaseBtn() { return ('#product-0-increase') }



  // get quantity() { return ('.snipcart-cart-header__option.snipcart-cart-header__count.snipcart__font--secondary.snipcart__font--bold') }

}
export default new AddToCart()