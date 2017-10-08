(function () {
    module.exports = function () {
        this.Then(/^I wait for (\d+) seconds$/, function (seconds) {
            return browser.driver.sleep(seconds * 1000);
        });
    };
}).call(this);