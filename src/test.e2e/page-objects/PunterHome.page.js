var PunterSoccerHome = function PunterSoccerHome() {

    browser.ignoreSynchronization = true;
    // browser.driver.manage().window().maximize();

    // this.searchBoxField = element(by.id('lst-ib'));
    this.oddsComparisonLink = element(by.css('a[href*="/odds-comparison/"]'));
    this.fixtureOne = element.all(by.css('div.competitor-details > div > b')).get(0);
    this.fixtureTwo = element.all(by.css('div.competitor-details > div > b')).get(1);
    this.fixtureThree = element.all(by.css('div.competitor-details > div > b')).get(2);
    this.fixtureOneBest = element.all(by.css('tr[id^="ocSelection_"]')).get(0).all(by.css('td.best > a')).get(0);
    this.fixtureOneBestHref = element.all(by.css('tr.oc-table__tr > td.best > a')).get(0).href;
    this.fixtureTwoBest = element.all(by.css('tr[id^="ocSelection_"]')).get(1).all(by.css('td.best > a')).get(0);
    this.fixtureThreeBest = element.all(by.css('tr[id^="ocSelection_"]')).get(2).all(by.css('td.best > a')).get(0);

    this.get = function () {
        return browser.get('https://www.odds.com.au/soccer/');
    };

    this.loadCheck = element(by.cssContainingText('h1', 'Compare Soccer Betting Odds'));
    this.waitForLoaded = function () {
        return browser.wait((function (_this) {
            return function () {
                return _this.loadCheck.isPresent();
            };
        })(this), 30000);
    };
};

module.exports = {
    "class": PunterSoccerHome,
    name: 'PunterSoccerHome'
};