import BasePage from "./basePage"

class RegistrationPage extends BasePage {
    static get url() {
        return "/#/register"
    }

    static get email() {
        return cy.get("#emailControl")
    }

    static get password() {
        return cy.get("#passwordControl")
    }

    static get repeatPassword() {
        return cy.get("#repeatPasswordControl")
    }

    static get securityQuestion() {
        return cy.get("[name='securityQuestion']")
    }

    static get chooseQuestion() {
        return cy.get("#mat-option-6")
    }

    static get securityAnswer() {
        return cy.get("#securityAnswerControl")
    }

    static get register() {
        return cy.get("#registerButton")
    }
}

export default RegistrationPage;
