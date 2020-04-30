const assert = require('assert')
const mainPage = require('../pages/main.page')
const topicsPage = require('../pages/topics.page')
const explorePage = require('../pages/explore.page')

describe.skip('Topics tests:', () => {
    beforeEach(() => {
        browser.deleteCookies()
        browser.url('/')
        browser.waitUntil(() => {const state = browser.execute(function () {return document.readyState;});
        return state === 'complete';},100000,'Oops, time out!',500);    
        
    })
    
    it('Verify topics Label is displayed: ', () => {

        do{mainPage.clickExploreMenuItem() }
        while(!mainPage.checkExploreBlockIsDisplayed())
        mainPage.clickExploreGitHubLink()
        explorePage.clickTopicsMenuItem()
        assert.strictEqual(topicsPage.checkHeaderLabelIsDisplayed(),true)
    })
  
    
})