
const constants = require('../utils/constants');
class ElememtUtil{

doMoveTo(element){
    element.waitForDisplayed()
    //browser.pause(constants.WAIT_TIME)
    element.moveTo()
}
doClick(element){
    element.waitForDisplayed()
    element.click()
}

doSetValue(element,value){
    element.waitForDisplayed()
    element.setValue(value)

}
doGetText(element){
    element.waitForDisplayed()
    return element.getText()

}
doIsDisplayed(element){
    element.waitForDisplayed()
    return element.isDisplayed()
}
}

module.exports = new ElememtUtil()