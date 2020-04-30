const elementUtil = require('../utils/elementUtil');
class MainPage{
    

    get signInBtn(){return $('[href="/login"]')}
    get searchInput(){return $('//input[@placeholder="Search GitHub"]')}
    get tryGitHubEnterpriseBtn(){return $('//span[contains(text(),"Learn how GitHub Enterprise works")]')}
    //
    get usernameInput(){return $('//input[@id="user[login]"]')}
    get emailInput(){return $('//input[@id="user[email]"]')}
    get passInput(){return $('//input[@id="user[password]"]')}
    get signUpBtn(){return $('//button[@class="btn-mktg btn-primary-mktg btn-large-mktg f4 btn-block my-3 js-add-experiment-labels-to-ga-click"]')} 
    //footer
    get usernameInputFooter(){return $('//input[@id="user[login]-footer"]')}
    get emailInputFooter(){return $('//input[@id="user[email]-footer"]')}
    get passInputFooter(){return $('//input[@id="user[password]-footer"]')}
    get signUpBtnFooter(){return $('//button[@class="btn-mktg btn-primary-mktg btn-block mt-n1"]')}
    get careersLink(){return $('//a[contains(text(),"Careers")]')}
    //MenuItems:WhyGithub
    get whyGitHubMenuItem(){return $('//summary[contains(text(),"Why GitHub?")]')}
    get whyGitHubBlock(){return $('[class*="dropdown-menu flex-auto rounded-1 bg-white px-0 mt"]')}
    get whyGitHubDropDown(){return $('//summary[contains(text(),"Pricing")]//*[local-name()="svg"]')}

    //MenuItems:Explore
    get exploreMenuItem(){return $('//summary[contains(text(),"Explore")]')}
    get exploreBlock(){return $('[class*="dropdown-menu flex-auto rounded-1 bg-white px-0 pt-2 pb-0"]')}
    get exploreGitHubLink(){return $('//a[contains(text(),"Explore GitHub")]')}
    //MenuItems:Pricing
    get pricingMenuItem(){return $('//summary[contains(text(),"Pricing")]')}
    get pricingBlock(){return $('[class*="dropdown-menu flex-auto rounded-1 bg-white px-0 pt-2 pb-4"]')}
    get pricingPlansLink(){return $('//a[contains(text(),"Plans")]')}  

    
    clickTryGitHubEnterpriseBtn(){elementUtil.doClick(this.tryGitHubEnterpriseBtn)}
    clickSearchInput(){elementUtil.doClick(this.searchInput)}
    clickCareersLink(){elementUtil.doClick(this.careersLink)}
    clickExploreGitHubLink(){elementUtil.doClick(this.exploreGitHubLink)}    
    clickPricingPlansLink(){elementUtil.doClick(this.pricingPlansLink)}

    clickPricingMenuItem(){elementUtil.doClick(this.pricingMenuItem)}
    clickWhyGitHubMenuItem(){elementUtil.doClick(this.whyGitHubMenuItem)}
    clickExploreMenuItem(){elementUtil.doClick(this.exploreMenuItem)}

    clickSignUpBtn (){elementUtil.doClick(this.signUpBtn)}
    clickSignUpBtnFooter (){elementUtil.doClick(this.signUpBtnFooter)}
    clickSignInBtn (){elementUtil.doClick(this.signInBtn)}

    moveToWhyGitHubMenuItem(){elementUtil.doMoveTo(this.whyGitHubMenuItem)}
    moveToExploreMenuItem(){elementUtil.doMoveTo(this.exploreMenuItem)}
    moveToPricingMenuItem(){elementUtil.doMoveTo(this.pricingMenuItem)}
   
    checkTryGitHubEnterpriseBtnIsDisplayed(){return elementUtil.doIsDisplayed(this.tryGitHubEnterpriseBtn)}
    //checkWhyGitHubBlockIsDisplayed(){return elementUtil.doIsDisplayed(this.whyGitHubBlock)}
    checkWhyGitHubMenuItemIsDisplayed(){return elementUtil.doIsDisplayed(this.whyGitHubMenuItem)}
    checkPricingMenuItemIsDisplayed(){return elementUtil.doIsDisplayed(this.pricingMenuItem)}
    //checkExploreBlockIsDisplayed(){return elementUtil.doIsDisplayed(this.exploreBlock)}
    checkExploreMenuItemIsDisplayed(){return elementUtil.doIsDisplayed(this.exploreMenuItem)}
    //checkPricingBlockIsDisplayed(){return elementUtil.doIsDisplayed(this.pricingBlock)}
    checkPricingMenuItemIsDisplayed(){return elementUtil.doIsDisplayed(this.pricingMenuItem)}
    
    checkSignInBtnIsDisplayed(){return elementUtil.doIsDisplayed(this.signInBtn)}

    enterSearchValue(value){elementUtil.doSetValue(this.searchInput, value)}

    inputUsername(value){elementUtil.doSetValue(this.usernameInput, value)}
    inputEmail(value){elementUtil.doSetValue(this.emailInput, value)}
    inputPass(value){elementUtil.doSetValue(this.passInput, value)}

    inputUsernameFooter(value){elementUtil.doSetValue(this.usernameInputFooter, value)}
    inputEmailFooter(value){elementUtil.doSetValue(this.emailInputFooter, value)}
    inputPassFooter(value){elementUtil.doSetValue(this.passInputFooter, value)}

    checkUsernameInputIsDisplayed(){
         //this.usernameInput.waitForDisplayed(3000)
         return this.usernameInput.isDisplayed()}
    checkPricingBlockIsDisplayed(){return this.pricingBlock.isDisplayed()}    
    checkExploreBlockIsDisplayed(){return this.exploreBlock.isDisplayed()} 
    checkWhyGitHubBlockIsDisplayed(){return this.whyGitHubBlock.isDisplayed()}
    
}

module.exports = new MainPage()