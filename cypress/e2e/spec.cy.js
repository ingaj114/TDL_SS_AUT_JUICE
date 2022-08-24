import LemonSearchPage from "../pageObjects/LemonSearchPage.page";
import LoginPage from "../pageObjects/LoginPage.page";
import RegistrationPage from "../pageObjects/RegistrationPage.page";

describe("Elements Page", () => {
  // Scenario - Login
  context("Juice shop page elements", () => {
    beforeEach(() => {
        LoginPage.visit();
        LoginPage.cookie.click();
        LoginPage.dismiss.click();
    });
    it("Login scenario", () => {
      LoginPage.email.type("demo");
      LoginPage.password.type("demo");
      LoginPage.login.click();
      LoginPage.account.click();
      LoginPage.validate.should("contain", "demo");
    });
    it("Registration scenario", () => {
      LoginPage.account.click();
      LoginPage.loginAccount.click();
      LoginPage.newCustomer.click();    
      const email = "email" + (Math.floor(Math.random() * 10000)) + "@ebox.com"; 
      RegistrationPage.email.type(email);
      RegistrationPage.password.type("password12345");
      RegistrationPage.repeatPassword.type("password12345");
      RegistrationPage.securityQuestion.click();
      RegistrationPage.chooseQuestion.click();
      RegistrationPage.securityAnswer.type("pecins");
      RegistrationPage.register.click();
      LoginPage.email.type(email);
      LoginPage.password.type("password12345");
      LoginPage.login.click();
      LoginPage.account.click();
      LoginPage.validate.should("contain", email);
    });

    it.only("Lemon scenario", () => {
      LoginPage.searchIcon.click({force: true});
      LoginPage.searchField.type("Lemon{enter}");
      LemonSearchPage.lemonImg.click();
      LemonSearchPage.text.should("contain", "Sour but full of vitamins.")
    });


  });
});