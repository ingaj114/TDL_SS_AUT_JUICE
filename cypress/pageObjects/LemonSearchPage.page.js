import BasePage from "./basePage"

class LemonSearchPage extends BasePage {
    static get url() {
        return "/#/search?q=lemon"
    }
// 
    static get lemonImg() {
        return cy.get(".mat-card.mat-focus-indicator.mat-elevation-z6.ribbon-card")
    }
    
    static get text() {
        return cy.get(".container.mat-typography")
    }
   
}

export default LemonSearchPage;
