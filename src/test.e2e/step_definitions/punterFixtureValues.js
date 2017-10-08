(function () {
    module.exports = function () {

        this.World = require('cukefarm').World;
        var q = require('q');

        this.Then(/^I get best values of table one$/, function () {
            var fixtureOne = this.currentPage.fixtureOne;
            var fixtureTwo = this.currentPage.fixtureTwo;
            var fixtureThree = this.currentPage.fixtureThree;
            var fixtureOneBest = this.currentPage.fixtureOneBest;
            var fixtureTwoBest = this.currentPage.fixtureTwoBest;
            var fixtureThreeBest = this.currentPage.fixtureThreeBest;

            fixtureOne.getText().then(function (value) {
                var fixture1 = value.toString();
                return console.log('fixture one value is ' + fixture1);
            });

            fixtureTwo.getText().then(function (value) {
                var fixture2 = value.toString();
                return console.log('fixture two value is ' + fixture2);
            });

            fixtureThree.getText().then(function (value) {
                var fixture3 = value.toString();
                return console.log('fixture two value is ' + fixture3);
            });

            fixtureOneBest.getText().then(function (value) {
                var fixture1Best = value.toString();
                console.log('fixture one best value is ' + fixture1Best);

            });
            fixtureTwoBest.getText().then(function (value) {
                var fixture2Best = value.toString();
                return console.log('fixture Two best value is ' + fixture2Best);
            });
            fixtureThreeBest.getText().then(function (value) {
                var fixture3Best = value.toString();
                return console.log('fixture three best value is ' + fixture3Best);
            });

            function test1() {
                getFixtureOneBestHref().then(function (item) {
                    console.log(item);
                    var str = item;
                    var res = str.substring(32, 36);
                    console.log(res);
                    if (res === "ubet") {
                        console.log('its ubet site');
                    }
                    else if (res === "luxb") {
                        console.log('its luxbet site');
                    }
                    else if (res === "Ladb") {
                        console.log('its Ladbrokes site');
                    }
                    else if (res === "Spor") {
                        console.log('its Sportsbet site');
                    }
                    else if (res === "will") {
                        console.log('its williamhill site');
                    }
                    else if (res === "unib") {
                        console.log('its unibet site');
                    }
                    else if (res === "Book") {
                        console.log('its Bookmaker site');
                    }
                    else if (res === "Crow") {
                        console.log('its Crownbet site');
                    }
                });
            }

            function test2() {
                getFixtureTwoBestHref().then(function (item) {
                    console.log(item);
                    var str = item;
                    var res = str.substring(32, 36);
                    console.log(res);
                    if (res === "ubet") {
                        console.log('its ubet site');
                    }
                    else if (res === "luxb") {
                        console.log('its luxbet site');
                    }
                    else if (res === "Ladb") {
                        console.log('its Ladbrokes site');
                    }
                    else if (res === "Spor") {
                        console.log('its Sportsbet site');
                    }
                    else if (res === "will") {
                        console.log('its williamhill site');
                    }
                    else if (res === "unib") {
                        console.log('its unibet site');
                    }
                    else if (res === "Book") {
                        console.log('its Bookmaker site');
                    }
                    else if (res === "Crow") {
                        console.log('its Crownbet site');
                    }
                });
            }

            function getFixtureOneBestHref() {
                return browser.wait(function () {
                    return fixtureOneBest.getAttribute('href').then(function (value) {
                        return value;
                    });
                });
            }

            function getFixtureTwoBestHref() {
                return browser.wait(function () {
                    return fixtureTwoBest.getAttribute('href').then(function (value) {
                        return value;
                    });
                });
            }

            test1();
            test2();
        });
    };
}).call(this);