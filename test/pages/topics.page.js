const elementUtil = require('../utils/elementUtil');
class TopicsPage{

    get headerLabel(){return $("//h1[@class='h0-mktg']")}
       
    checkHeaderLabelIsDisplayed(){return elementUtil.doIsDisplayed(this.headerLabel)}
   
    
}

module.exports = new TopicsPage()