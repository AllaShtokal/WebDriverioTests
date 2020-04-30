const elementUtil = require('../utils/elementUtil');
class EnterpriseSignUpPage{

    get usernameInput(){    return $("//input[@id='contact_request_name']")}
    get companyNameInput(){ return $("//input[@id='contact_request_organization_name']")}
    get workEmailInput(){   return $("//input[@id='contact_request_email']")}
    get phoneNumberInput(){ return $("//input[@id='contact_request_phone']")}
    get notSureRadioBtn(){  return $("//input[@id='contact_request_instance_type_not_sure']")}
    get acceptTermsCheckbox(){return $("//div[@class='form-checkbox mt-2 mb-4']")}
    get yesRadioBtn(){return $("//input[@id='questions_yes']")}
    get questionsInput(){return $("//textarea[@id='questions-list']")}
   
    inputQuestions(value){elementUtil.doSetValue(this.questionsInput, value)}
        
    inputUsername(value){elementUtil.doSetValue(this.usernameInput, value)}
    checkUsernameInputIsDisplayed(){
        this.usernameInput.waitForDisplayed({ timeout: 5000 })
        console.log("before return:" + this.usernameInput.isDisplayed())
        return this.usernameInput.isDisplayed()}

    inputCompanyName(value){elementUtil.doSetValue(this.companyNameInput, value)}
    inputWorkEmail(value){elementUtil.doSetValue(this.workEmailInput, value)}
    inputPhoneNumber(value){elementUtil.doSetValue(this.phoneNumberInput, value)}
    
    clickNotSureRadioBtn(){elementUtil.doClick(this.notSureRadioBtn)}
    clickAcceptTermsCheckbox(){elementUtil.doClick(this.acceptTermsCheckbox)}
    clickYesRadioBtn(){elementUtil.doClick(this.yesRadioBtn)}
     
       
    
    
}

module.exports = new EnterpriseSignUpPage()