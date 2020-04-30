const mainPage = require('../pages/main.page')
const careersPage = require('../pages/careers.page')

describe.skip('Careers Page tests:', () => {
    beforeEach(() => {
        browser.url('/')
        browser.waitUntil(() => {const state = browser.execute(function () {return document.readyState;});
        return state === 'complete';},100000,'Oops, time out!',500);
    })
    

    it('Print open positions: ', () => {
        mainPage.clickCareersLink()
        careersPage.clickOpenPositionsLink()
        careersPage.printAllAvailablePositions()
        

    })
    
})