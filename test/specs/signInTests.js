const assert = require('assert')
const mainPage = require('../pages/main.page')
const signInPage = require('../pages/signIn.page')
const accountMainPage = require('../pages/accountMain.page')
const resetPassPage = require('../pages/resetPass.page')
const constants = require('../utils/constants');
const config = require('../utils/config');

describe.skip('Sign In', () => {
    beforeEach(() => {
        browser.url('/')
        browser.waitUntil(() => {const state = browser.execute(function () {return document.readyState;});
        return state === 'complete';},10000,'Oops, time out!',500);
    })
    it('with valid credentials:', () => {
        mainPage.clickSignInBtn()
        signInPage.inputEmail(config.SIGNIN_VALID_EMAIL)
        signInPage.inputPass(config.SIGNIN_VALID_PASS)
        signInPage.clickSignInBtn()
        browser.waitUntil(() => {const state = browser.execute(function () {return document.readyState;});
        return state === 'complete';},10000,'Oops, time out!',500);
        accountMainPage.clickUserAvatarLink()
        assert.strictEqual(accountMainPage.CheckUserNikName(),config.ACCOUNT_PAGE_USERNAME)
        
    })
    
})
describe.skip('Forgot Password Test:', () => {
    beforeEach(() => {
        browser.deleteCookies()
        browser.url('/')
        browser.waitUntil(() => {const state = browser.execute(function () {return document.readyState;});
        return state === 'complete';},10000,'Oops, time out!',500);
        mainPage.clickSignInBtn()
        signInPage.clickForgotPassLink()
        
        
    })
    it('with valid credentials', () => {
        
        resetPassPage.inputEmail(config.SIGNIN_VALID_EMAIL)
        resetPassPage.cklickSubmitBtn()
        assert.strictEqual(resetPassPage.checkConfirmMessage(), true)
        
    })
    it('with no input data', () => {
        
        resetPassPage.inputEmail('')
        resetPassPage.cklickSubmitBtn()
        assert.strictEqual(resetPassPage.checkErrorMessage(), true)
        
    })
    it('with invalid credentials', () => {
        
        resetPassPage.inputEmail(constants.SIGNIN_INVALID_EMAIL)
        resetPassPage.cklickSubmitBtn()
        assert.strictEqual(resetPassPage.checkErrorMessage(), true)
        
    })
   
})