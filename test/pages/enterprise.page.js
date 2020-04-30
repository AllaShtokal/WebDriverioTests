const elementUtil = require('../utils/elementUtil');
class EnterprisePage{

    get startFreeTrialBtn(){
        return $("//a[@class='btn-mktg btn-large-mktg mb-2']")
    }
        
    clickStartFreeTrialBtn(){elementUtil.doClick(this.startFreeTrialBtn)}

       
    
    
}

module.exports = new EnterprisePage()