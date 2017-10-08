var PunterOddsComparison = function PunterOddsComparison() {

    browser.ignoreSynchronization = true;

    // this.searchBoxField = element(by.id('lst-ib'));
    this.oddsComparisonLink = element(by.css('a[href*="/odds-comparison/"]'));
    this.pageTitle = element(by.cssContainingText('h1', 'Odds Comparison'));
    // this.soccerItemLink = element(by.cssContainingText('a', 'Soccer'));
    this.soccerItemLink = element(by.id('fb-root'));
    // this.soccerList = function () {
    //     var elementValue = element(by.cssContainingText('a', 'Soccer'));
    //     return browser.executeScript("arguments[0].scrollIntoView();", elementValue.getWebElement());
    // };

    this.get = function () {
        return browser.get('https://www.punter.com.au/odds-comparison/');
    };

    // this.loadCheck = element(by.id('template-quickbet'));
    this.waitForLoaded = function () {
        return browser.wait((function (_this) {
            return function () {
                return _this.pageTitle.isPresent();
            };
        })(this), 30000);
    };
};

module.exports = {
    "class": PunterOddsComparison,
    name: 'PunterOddsComparison'
};