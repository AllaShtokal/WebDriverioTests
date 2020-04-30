const elementUtil = require('../utils/elementUtil');
class JoinPage{

    get verifyYourAccountLabel(){return $('//h2[@class="f4 mb-3"]')
    }
    
    
    verifyYourAccountLabelIsDisplayed(){return elementUtil.doIsDisplayed(this.verifyYourAccountLabel)}
       
    
    
}

module.exports = new JoinPage()