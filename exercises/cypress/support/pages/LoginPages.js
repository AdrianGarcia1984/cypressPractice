var pageLocators={
    inputUser:'#username',
    inputPassword:'#password',
    submitBtn:'#submit',
    logoutBtn:'.wp-block-button__link'
}

class LoginPage{
    textUser(){return cy.get(pageLocators.inputUser)}
    textPassword(){return cy.get(pageLocators.inputPassword)}
    toSubmit(){return cy.get(pageLocators.submitBtn)}
    toLogout(){return cy.get(pageLocators.logoutBtn)}

    InputTextUser(user){return this.textUser().type(user+'{enter}')}
    InputTextPassword(password){return this.textPassword().type(password+'{enter}')}
    clickToSubmit(){return this.toSubmit().click()}
    logoutBtn(){return this.toLogout().should('exist')}

}

export default LoginPage