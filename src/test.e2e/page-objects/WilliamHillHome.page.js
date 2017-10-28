var WilliamHillHome = function WilliamHillHome() {

    browser.ignoreSynchronization = true;

    this.searchBoxField = element(by.id('lst-ib'));
    this.searchButton = element(by.css('input[value*="Google Search"]'));

    this.get = function () {
        return browser.get('https://www.williamhill.com.au/');
    };

    this.loadCheck = element(by.css('div.App_root_3WJ'));
    this.waitForLoaded = function () {
        return browser.wait((function (_this) {
            return function () {
                return _this.loadCheck.isPresent();
            };
        })(this), 40000);
    };
};

module.exports = {
    "class": WilliamHillHome,
    name: 'WilliamHillHome'
};