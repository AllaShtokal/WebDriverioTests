const elementUtil = require('../utils/elementUtil');
class AccountMainPage {
   
    get userAvatarLink(){return $("//summary[@class='Header-link']//img[contains(@class,'avatar')]")}
    get userNikName(){return $("//strong[@class='css-truncate-target']")}
    //strong[contains(text(),'TestforTestove')]
    
    
    clickUserAvatarLink(){ elementUtil.doClick(this.userAvatarLink)}
    CheckUserNikName(){return elementUtil.doGetText(this.userNikName)}

}

module.exports = new AccountMainPage()