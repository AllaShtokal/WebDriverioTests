const elementUtil = require('../utils/elementUtil');
class JoinWithPlanPage{

    get usernameInput(){return $('//input[@name="user[login]"]')}
    get emailInput(){return $('//input[@name="user[email]"]')}
    get passInput(){ return $('//input[@name="user[password]"]')}

    inputUsername(value){elementUtil.doSetValue(this.usernameInput, value)}
    inputEmail(value){elementUtil.doSetValue(this.emailInput, value)}
    inputPass(value){elementUtil.doSetValue(this.passInput, value)}
    checkUsernameInputIsDisplayed(){
        this.usernameInput.waitForDisplayed({ timeout: 5000 })
        return this.usernameInput.isDisplayed()}   
    
}

module.exports = new JoinWithPlanPage()