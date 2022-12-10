class Login {
  get login_signupBtn() { return ('#signInOrRegister') }
  get inputEmail() { return ('input[id="1-email"]') }
  get inputPassword() { return ('input[placeholder="your password"]') }
  get loginBtn() { return ('button[name="submit"]') }

  get errmessage() { return ('span[class="animated fadeInUp"] span') }

  loginUser(email, password) {
    cy.get(this.login_signupBtn).click()
    cy.get(this.inputEmail).type(email)
    cy.get(this.inputPassword).type(password)
    cy.get(this.loginBtn).click()
  }

  // google sign in
  get googleBtn() { return ('a[type="button"] div:nth-child(1)') }
  get googleEmail() { return ('input[name="email"]') }
  get googleNxtBtn1() { return ('button[class="VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc LQeN7 qIypjc TrZEUc lw1w4b"] div[class="VfPpkd-RLmnJb"]') }
  get googlePassword() { return ('input[name="password"]') }
  get googleNxtBtn2() { return ('div[id="passwordNext"] span') }

  googleLogin(email, password) {
    cy.get(this.googleBtn).click()
    cy.get(this.googleEmail).type(email)
    cy.get(this.googleNxtBtn1).click()
    cy.get(this.googlePassword).type(password)
    cy.get(this.googleNxtBtn2).click()
  }


  //signup

}
export default new Login()
