const assert = require('assert')
const mainPage = require('../pages/main.page')


describe.skip('Hover to', () => {
    beforeEach(() => {
        
        browser.url('/')
        browser.waitUntil(() => {const state = browser.execute(function () {return document.readyState;});
        return state === 'complete';},100000,'Oops, time out!',500);
             
            
    })
    it(' 1. Why GitHub Menu Item:', () => {
       
       do{mainPage.clickWhyGitHubMenuItem()}
       while(!mainPage.checkWhyGitHubBlockIsDisplayed())
       assert.strictEqual (mainPage.checkWhyGitHubBlockIsDisplayed(),true)
        
    })
    it(' 2. Explore Menu Item:', () => {
        do{mainPage.clickExploreMenuItem() }
        while(!mainPage.checkExploreBlockIsDisplayed())
        assert.strictEqual (mainPage.checkExploreBlockIsDisplayed(),true)
        
              
        
    })
    it('3. Pricing Menu Item:', () => {
        do{mainPage.clickPricingMenuItem()}
        while(!mainPage.checkPricingBlockIsDisplayed())
        assert.strictEqual (mainPage.checkPricingBlockIsDisplayed(),true)
        
              
        
    })
    
})