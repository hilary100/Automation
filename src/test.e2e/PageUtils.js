var PageUtils = function() {
    var q = require('q');

    var api = {
        waitForDisplayed: waitForDisplayed,
        waitForClickable: waitForClickable,
        waitForVisible: waitForVisible,
        waitFor: waitFor,
        waitForPromiseCheck: waitForPromiseCheck,
        waitForPresent: waitForPresent,
        scrollToElement: scrollToElement,
        scrollToPageBottom: scrollToPageBottom,
        scrollToAndClick: scrollToAndClick
    };

    return api;

    function waitForDisplayed(elementFinder, timeout) {
        return waitForPresent(elementFinder, timeout).then(function() {
            return waitForPromiseCheck(elementFinder, 'isDisplayed',
                function (result) {
                    return result;
                }, timeout);
        })
    }

    function waitForClickable(elementFinder, timeout) {
        return waitForDisplayed(elementFinder, timeout).then(function() {
            return waitFor(protractor.ExpectedConditions.elementToBeClickable(elementFinder), timeout);
        })
    }

    function waitForVisible(elementFinder, timeout) {
        return waitForDisplayed(elementFinder, timeout).then(function() {
            return waitFor(protractor.ExpectedConditions.visibilityOf(elementFinder), timeout);
        })
    }

    function waitFor(expectedCondition, timeout) {
      if (!timeout) timeout = 50000;
      return browser.wait(expectedCondition, timeout, 'timed out waiting for expectedCondition - os the locator correct?');
    }

    function waitForPromiseCheck(elementLocator, callFunction, testFn, timeout) {
      if (!timeout) timeout = 30000;
      return browser.wait(function () {
          var deferred = protractor.promise.defer();
          if (elementLocator) {
              elementLocator[callFunction]().then(function (data) {
                  deferred.fulfill(testFn(data));
              });
          }
          else {
              deferred.fulfill(false);
          }
          return deferred.promise;
      }, timeout, 'timed out checking ' + callFunction + ' - is the locator correct? ' +
            elementLocator.locator().using + 'matching ' + elementLocator.locator().value);
    }

    function waitForPresent(elementFinder, timeout) {
        return waitForPromiseCheck(elementFinder, 'isPresent', function (result) {
            return result;
        }, timeout);
    }

    function scrollToElement(elementFinder) {
        return browser.driver.executeScript("argument[0].scrollIntoView();", elementFinder.getWebElement());
    }

    function scrollToPageBottom() {
        return browser.driver.executeScript('window.scrollTo(0,document.body.scrollHeight);');
    }

    function scrollToAndClick(element) {
        browser.driver.executeScript("argument[0].scrollIntoView();", element.getWebElement()).then(function () {});
        return waitForClickable(element).then(function() {
            return element.click();
        });
    }
};

module.exports = PageUtils();