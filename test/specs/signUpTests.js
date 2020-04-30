const assert = require('assert')
const name = require('random-username-generator')
const pass = require('secure-random-password')
//const randomEmail = require('random-email')
//const randomDomains = require('random-domains');
name.setSeperator('a')
const mainPage = require('../pages/main.page')
const joinPage = require('../pages/join.page')
const joinWithPlanPage = require('../pages/joinWithPlan.page')
const enterprisePage = require('../pages/enterprise.page')
const enterprisePlanPage = require('../pages/enterprisePlan.page')
const enterpriseSignUpPage = require('../pages/enterpriseSignUp.page')
const LENGTH = 15;
const SETINGS = [pass.lower, pass.upper, pass.digits]

describe.skip('Traditional signUp:', () => {
    beforeEach(() => {
        do{
        browser.deleteCookies()
        browser.url('/')
        browser.waitUntil(() => {const state = browser.execute(function () {return document.readyState;});
        return state === 'complete';},20000,'Oops, time out!',500);
        }while(            
        mainPage.checkUsernameInputIsDisplayed() === false)
 
    })
    it(' by first SignUp Block:', () => {
        
        mainPage.inputUsername(pass.randomPassword({length: LENGTH,characters: [pass.lower] }))
        mainPage.inputEmail(pass.randomPassword({characters: [pass.lower, pass.upper] })+'@gmail.com')
        mainPage.inputPass(pass.randomPassword({lengths:LENGTH, characters: SETINGS }))
        
        mainPage.clickSignUpBtn()
        assert.strictEqual(joinPage.verifyYourAccountLabelIsDisplayed(),true,"joinPage.verifyYourAccountLabelIsDisplayed(): ")
        assert.strictEqual(browser.getUrl(), 'https://github.com/join')
    })
    it('by second SignUn Block: ', () => {
        mainPage.inputUsernameFooter(pass.randomPassword({length: LENGTH,characters: [pass.lower] }))
        mainPage.inputEmailFooter(pass.randomPassword({characters: [pass.lower, pass.upper] })+'@gmail.com')
        mainPage.inputPassFooter(pass.randomPassword({ length: LENGTH, characters: SETINGS }))
        
        mainPage.clickSignUpBtnFooter()
        assert.strictEqual(joinPage.verifyYourAccountLabelIsDisplayed(),true)
        assert.strictEqual(browser.getUrl(), 'https://github.com/join')
    })
})
describe('Try Git Hub enterprise:', () => {
    beforeEach(() => {
        do{
        browser.deleteCookies()  
        browser.url('/')
        browser.waitUntil(() => {const state = browser.execute(function () {return document.readyState;});
        return state === 'complete';},100000,'Oops, time out!',500);}
        while (mainPage.checkTryGitHubEnterpriseBtnIsDisplayed() === false)
        mainPage.clickTryGitHubEnterpriseBtn()
        enterprisePage.clickStartFreeTrialBtn()
    })
    it('Cloud:', () => {
        do{enterprisePlanPage.clickEnterpriseCloudBtn()}
        while(!joinWithPlanPage.checkUsernameInputIsDisplayed())
        joinWithPlanPage.inputUsername(name.generate())
        joinWithPlanPage.inputEmail(pass.randomPassword({characters: [pass.lower, pass.upper] })+'@gmail.com')
        joinWithPlanPage.inputPass(pass.randomPassword({ length: LENGTH, characters: SETINGS })) 
        
        
    })
    it('Server:', () => {

        do{enterprisePlanPage.clickEnterpriseServerBtn()}
        while(!enterpriseSignUpPage.checkUsernameInputIsDisplayed())
        enterpriseSignUpPage.inputUsername(name.generate())
        enterpriseSignUpPage.inputCompanyName(name.generate())
        enterpriseSignUpPage.inputWorkEmail(pass.randomPassword({characters: [pass.lower, pass.upper] })+'@gmail.com')
        enterpriseSignUpPage.inputPhoneNumber(pass.randomPassword({ length: 9, characters: pass.digits }))
        enterpriseSignUpPage.clickNotSureRadioBtn()
        enterpriseSignUpPage.clickYesRadioBtn()
        enterpriseSignUpPage.inputQuestions(name.generate())
        enterpriseSignUpPage.clickAcceptTermsCheckbox()
        
        
       
    })
   
})
