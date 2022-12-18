class Contact {
  get contactBtn() { return ('#top-contact') }

  //Form Submission
  get inputfirstName() { return ('#firstName') }
  get inputLastname() { return ('#lastName') }
  get inputEmail() { return ('#email') }
  get inputSubject() { return ('#subject') }
  get inputMsg() { return ('#message') }
  get sendBtn() { return ('button[class="chakra-button css-vs0e4t"]') }
  get flashMsg() { return ('#toast-1-title') }


  contactQW(firstname, lastname, email, subject, message) {
    cy.get(this.inputfirstName).type(firstname)
    cy.get(this.inputLastname).type(lastname)
    cy.get(this.inputEmail).type(email)
    cy.get(this.inputSubject).type(subject)
    cy.get(this.inputMsg).type(message)
    cy.get(this.sendBtn).click()
  }
}
export default new Contact()