const elementUtil = require('../utils/elementUtil');
class JoinPage{

    get typeScriptLabel(){return $('//div[@class="col-12 col-md-3 float-left px-md-2"]//li[2]//a[1]')}
    get firstSearchResultLink(){return $('//main[@id="js-pjax-container"]/div/div/div/ul/li[1]/div[2]/div[1]/a[1]')}
    
        
    clickTypeScriptLabel(){elementUtil.doClick(this.typeScriptLabel)}
    clickFirstSearchResultLink(){elementUtil.doClick(this.firstSearchResultLink)}
       
    
    
}

module.exports = new JoinPage()