
const name = require('random-username-generator')
const pass = require('secure-random-password')
name.setSeperator('a');
const mainPage = require('../pages/main.page')
const pricingPage = require('../pages/pricing.page')
const joinWithPlanPage = require('../pages/joinWithPlan.page')
const LENGTH = 16;
const SETINGS = [pass.lower, pass.upper, pass.digits]


describe.skip('Choose plan tests:', () => {
    beforeEach(() => {
        browser.url('/')
        browser.waitUntil(() => {const state = browser.execute(function () {return document.readyState;});
        return state === 'complete';},100000,'Oops, time out!',500);
        
        
        
    })
    
    it('1. Free plan:', () => {
        do{mainPage.clickPricingMenuItem()}
        while(!mainPage.checkPricingBlockIsDisplayed())
        mainPage.clickPricingPlansLink()
        pricingPage.clickJoinForFreeBtn()
        joinWithPlanPage.inputUsername(name.generate())
        joinWithPlanPage.inputEmail(pass.randomPassword({characters: [pass.lower, pass.upper] })+'@gmail.com')
        joinWithPlanPage.inputPass(pass.randomPassword({lengths:LENGTH, characters: SETINGS }))
        

             

        
    })
    
})