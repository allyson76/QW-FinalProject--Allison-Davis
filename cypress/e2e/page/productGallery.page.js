class ProductGallery {
  //Single item
  get productTitle() { return ('.chakra-heading.css-1jhlc8u') }
  get productName() { return ('div[id="product-0"] p[class="chakra-text css-1n64n71"]') }

  get image1() { return ('.chakra-image.css-2i84d9[src="/images/quality-hat-model.jpg"]') }
  get image2() {
    return ('img[src="https://images.unsplash.com/photo-1521369909029-2afed882baee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"]')
  }

  //Multiple items
  get product1Title() { return ('.chakra-heading.css-1jhlc8u') }
  get product1Name() { return ('div[id="product-0"] p[class="chakra-text css-1n64n71"]') }

  get product2Title() { return ('.chakra-heading.css-1jhlc8u') }
  get product2Name() { return ('div[id="product-0"] p[class="chakra-text css-1n64n71"]') }

  get item1Image1() { return ('.chakra-image.css-2i84d9[src="/images/quality-hat-model.jpg"]') }
  get item1Image2() {
    return ('img[src="https://images.unsplash.com/photo-1521369909029-2afed882baee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"]')
  }

  get item2Image1() { return ('img[src="/images/quality-mousepad.jpg"]') }
  get item2Image2() {
    return ('img[src="//images.unsplash.com/photo-1598978554684-31ee8d544884?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"]')
  }

}
export default new ProductGallery()