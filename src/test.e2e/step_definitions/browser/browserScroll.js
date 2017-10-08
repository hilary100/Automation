(function () {
    module.exports = function () {

        this.World = require('cukefarm').World;
        var q = require('q');

        this.Then(/^I scroll to the element "([^"]*)"$/, function (el) {
            var target = this.currentPage[el];
            return this.pageUtils.waitFor(target, 10000).then(function() {
                return browser.driver.executeScript('document.getElementCss("' + target + '").scrollIntoView();');
            });
            // el = this.transform.stringToVariableName(elementName);
            // browser.driver.executeScript("arguments[0].scrollIntoView(true);", elementName.getWebElement()).then(function () {
            //     return browser.driver.sleep(2 * 1000);
            // });
            // this.pageUtils.scrollToElement(elementName);
            // this.pageUtils.scrollToElement(el);
            // this.pageUtils.scrollToPageBottom();
        });
    };
}).call(this);