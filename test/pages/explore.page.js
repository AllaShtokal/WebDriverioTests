const elementUtil = require('../utils/elementUtil');
class ExplorePage{

    get topicsMenuItem(){return $('//main//div//nav//div//a[contains(text(),"Topics")]')}
       
    clickTopicsMenuItem(){elementUtil.doClick(this.topicsMenuItem)}
   
    
}

module.exports = new ExplorePage()