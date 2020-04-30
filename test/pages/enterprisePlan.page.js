const elementUtil = require('../utils/elementUtil');
class EnterprisePlanPage{

    get enterpriseCloudBtn(){
        return $("//div[contains(@class,'h1')][contains(text(),'Enterprise Cloud')]")
    }
    get enterpriseServerBtn(){
        return $("//div[contains(@class,'h1')][contains(text(),'Enterprise Server')]")
                  
    }
    
        
    clickEnterpriseCloudBtn(){elementUtil.doClick(this.enterpriseCloudBtn)}
    clickEnterpriseServerBtn(){elementUtil.doClick(this.enterpriseServerBtn)}
       
    
    
}

module.exports = new EnterprisePlanPage()