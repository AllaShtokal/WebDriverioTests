const elementUtil = require('../utils/elementUtil');
class ResetPassPage{

    get emailInput(){return $('//input[@id="email_field"]')}
    get submitBtn(){return $('//input[@name="commit"]')}
    get confirmMessage(){return $('//p[contains(text(),"Check your email for a link to reset your password")]')}
    get errorMessage(){return $('//div[@class="container-lg px-2"]')}
    
       
    checkConfirmMessage(){return elementUtil.doIsDisplayed(this.confirmMessage)}
    checkErrorMessage(){return elementUtil.doIsDisplayed(this.errorMessage)}
    //checkTooManyAttemtsErrorMessage(){return elementUtil.doIsDisplayed(this.tooManyAttemtsErrorMessage)}
    inputEmail(value){elementUtil.doSetValue(this.emailInput, value)}
    cklickSubmitBtn(){elementUtil.doClick(this.submitBtn)}
          
    
}

module.exports = new ResetPassPage()