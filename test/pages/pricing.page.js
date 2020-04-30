const elementUtil = require('../utils/elementUtil');
class PricingPage{

    
    get joinForFreeBtn(){return $('//div[@class="d-flex container-xl mx-auto overflow-x-scroll pricing-plans-container js-pricing-plans-container flex-md-justify-center pt-2 pb-4"]//a[@class="btn-block btn-mktg h4-mktg"][contains(text(),"Join for free")]')
    }
    clickJoinForFreeBtn(){elementUtil.doClick(this.joinForFreeBtn)}
        
    
    
}

module.exports = new PricingPage()