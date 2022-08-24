import BasePage from "./basePage"

class LoginPage extends BasePage {
    static get url() {
        return "/#/login"
    }

    static get cookie() {
        return cy.get(".cc-dismiss")
    }

    static get dismiss() {
        return cy.get(".mat-focus-indicator.close-dialog.mat-raised-button.mat-button-base.mat-primary.ng-star-inserted")
    }

    static get email() {
        return cy.get("#email")
    }
    
    static get password() {
        return cy.get("#password")
    }

    static get login() {
        return cy.get("#loginButton")
    }

    static get account() {
        return cy.get("#navbarAccount")
    }
    
    static get validate() {
        return cy.get("[aria-label='Go to user profile'].ng-tns-c248-2")
    } 

    static get loginAccount() {
        return cy.get("#navbarLoginButton")
    }
    
    static get newCustomer() {
        return cy.get("#newCustomerLink")
    }

    static get searchIcon(){
        return cy.get('mat-form-field.mat-search_field')
    }

    static get searchField() {
        return cy.get("#searchQuery")
    }   

    

}

export default LoginPage;
