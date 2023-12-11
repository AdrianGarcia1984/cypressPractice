import LoginPage from "../../support/pages/LoginPages";
const loginPage = new LoginPage()


context('example POM single',()=>{
    beforeEach(()=>{
        cy.visit('https://practicetestautomation.com/practice-test-login/')
    })

    const user='student'
    const password='Password123'

    it('test 01',()=>{
        loginPage.InputTextUser(user);
        loginPage.InputTextPassword(password);
        loginPage.clickToSubmit();
        loginPage.logoutBtn().should()
    })

})