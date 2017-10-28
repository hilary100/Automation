var LuxbetHome = function LuxbetHome() {

    browser.ignoreSynchronization = true;

    this.searchBoxField = element(by.id('lst-ib'));
    this.searchButton = element(by.css('input[value*="Google Search"]'));

    this.get = function () {
        return browser.get('https://www.luxbet.com');
    };

    this.loadCheck = element(by.css('div.luxlogo'));
    this.waitForLoaded = function () {
        return browser.wait((function (_this) {
            return function () {
                return _this.loadCheck.isPresent();
            };
        })(this), 40000);
    };
};

module.exports = {
    "class": LuxbetHome,
    name: 'LuxbetHome'
};