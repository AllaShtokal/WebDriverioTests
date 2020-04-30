const elementUtil = require('../utils/elementUtil');
class CareersPage{

    get openPositionsLink(){
        return $('//a[@class="f3-light d-inline-block mr-5 js-smoothscroll-anchor"]')
    }
    get listOfPositionsParent(){
        return $('//div[@class="pb-md-6"]')
    }
    get listOfPositionsChildElements(){
        return this.listOfPositionsParent.$$('//button/h3')
    }
    printAllAvailablePositions(){
        
        return this.listOfPositionsChildElements.filter(element =>{
            console.log("Position: " + element.getText())
        })
    }
    
    
    clickOpenPositionsLink(){elementUtil.doClick(this.openPositionsLink)}
    
}

module.exports = new CareersPage()