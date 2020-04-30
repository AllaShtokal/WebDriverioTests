const assert = require('assert')
const mainPage = require('../pages/main.page')
const searchPage = require('../pages/search.page')
const constants = require('../utils/constants');

describe.skip('Search Tests', () => {
    beforeEach(() => {
        browser.url('/')
        browser.waitUntil(() => {const state = browser.execute(function () {return document.readyState;});
        return state === 'complete';},100000,'Oops, time out!',500);
        
    })
    it('Check Outputof search:', () => {
        mainPage.clickSearchInput()
        mainPage.enterSearchValue(constants.SEARCH_INPUT)
        browser.keys("\uE007"); 
        searchPage.clickTypeScriptLabel()
        searchPage.clickFirstSearchResultLink()
        assert.strictEqual(browser.getUrl().includes(constants.SEARCH_INPUT), true)

        
    })
   
})