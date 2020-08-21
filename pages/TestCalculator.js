var TestCalculator = function() {

  let firstNumber = element(by.model('first'));
  let secondNumber = element(by.model('second'));

  let dropdown = element(by.model('operator'));

  let button = element(by.id('gobutton'));

  let result = element(by.binding('latest'));

  let history = element.all(by.repeater('result in memory'));

  this.get = function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
  };

  this.getTitle = function() {
    return browser.getTitle();
  }

  this.performOperation = function(firstNo, secondNo, operator) {
    firstNumber.sendKeys(firstNo);
    dropdown.$(`[value="${operator}"]`).click();
    secondNumber.sendKeys(secondNo);
    button.click();
    return result.getText();
  }
  
  this.countOperation = function() {
    return history.count();
  }
};
module.exports = new TestCalculator();
