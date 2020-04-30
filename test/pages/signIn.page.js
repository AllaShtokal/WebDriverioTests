const elementUtil = require('../utils/elementUtil');
class SignInPage{

    get emailInput(){return $('//input[@id="login_field"]')}
    get passInput(){return $('//input[@id="password"]')}
    get signInBtn(){return $('//input[@name="commit"]')}
    get forgotPassLink(){return $('//a[@class="label-link"]')}

    clickForgotPassLink(){elementUtil.doClick(this.forgotPassLink)}
    clickSignInBtn (){elementUtil.doClick(this.signInBtn)}
    inputEmail(value){elementUtil.doSetValue(this.emailInput, value)}
    inputPass(value){elementUtil.doSetValue(this.passInput, value)}
       
    
        
    
}

module.exports = new SignInPage()