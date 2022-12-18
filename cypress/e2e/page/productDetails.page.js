class ProductDetail {
  //Single item
  get productTitle() { return ('.chakra-heading.css-1jhlc8u') }
  get productName() { return ('div[id="product-0"] p[class="chakra-text css-1n64n71"]') }

  get itemCategory() { return ('div[id="product-0"] span[class="css-1ccau2i"]') }
  get image1() { return ('.chakra-image.css-2i84d9[src="/images/quality-hat-model.jpg"]') }
  get image2() { return ('li[class="thumb"]') }
  get itemName() { return ('div[class="chakra-stack css-84zodg"] h2[class="chakra-heading css-1dklj6k"]') }
  get slideSelect() { return ('li[class="slide selected"] div') }
  get nxtDot() { return ('li[value="1"]') }

  //Multiple items
  get backBtn() { return ('.chakra-heading.css-1jhlc8u') }
  get product2Name() { return ('div[id="product-0"] p[class="chakra-text css-1n64n71"]') }

  get item2Image1() { return ('.chakra-image.css-2i84d9[src="/images/quality-mousepad.jpg"]') }
  get image2() { return ('li[class="thumb"]') }

  //Related items

  get relatedTitle() { return ('body div[id="__next"] div[class="chakra-container css-1326l4r"] div[class="chakra-stack css-ual471"] h2:nth-child(1)') }

  get rltdCategory() { return ('div[class="chakra-stack css-egoftb"] span[class="css-1ccau2i"]') }
  get rltdProdName() { return ('.chakra-text.css-1n64n71') }
  get rltdProdImage() { return ('.chakra-image.css-138bbah') }
}
export default new ProductDetail()