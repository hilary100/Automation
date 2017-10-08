(function () {
    module.exports = function () {

        this.World = require('cukefarm').World;
        var q = require('q');

        this.Then(/^I get best values of table one$/, function () {
            var fixtureOne = this.currentPage.fixtureOne;
            var fixtureTwo = this.currentPage.fixtureTwo;
            var fixtureThree = this.currentPage.fixtureThree;
            var fixtureOneBest = this.currentPage.fixtureOneBest;
            var fixtureOneBestHref = this.currentPage.fixtureOneBestHref;
            var fixtureTwoBest = this.currentPage.fixtureTwoBest;
            var fixtureThreeBest = this.currentPage.fixtureThreeBest;
            // this.pageUtils.scrollToElement(fixtureOne);
            // fixtureOne.getText().then(function (value) {
            //     var fixture1 = value.toString();
            //     return console.log('fixture one value is ' + fixture1)
            // });
            //
            // fixtureTwo.getText().then(function (value) {
            //     var fixture2 = value.toString();
            //     return console.log('fixture two value is ' + fixture2)
            // });
            //
            // fixtureThree.getText().then(function (value) {
            //     var fixture3 = value.toString();
            //     return console.log('fixture two value is ' + fixture3);
            //     // if (fixture3 === 'Draw') {
            //     //     console.log('fixture 3 has value Draw')
            //     // }
            // });
            // fixtureOneBest.getText().then(function (value) {
            //     var fixture1Best = value.toString();
            //     return console.log('fixture one best value is ' + fixture1Best);
            // });
            // fixtureTwoBest.getText().then(function (value) {
            //     var fixture2Best = value.toString();
            //     return console.log('fixture Two best value is ' + fixture2Best);
            // });
            // fixtureThreeBest.getText().then(function (value) {
            //     var fixture3Best = value.toString();
            //     return console.log('fixture three best value is ' + fixture3Best);
            // });
            // var completeFixture;
            // completeFixture.then(function () {
            //
            // });
            // console.log("fixture = " + fixtureOne.getText().toString() + "" + fixtureTwo.getText().toString() + "" + fixtureThree.getText().toString());

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
            // if (fixture3 === 'Draw') {
            //     console.log('fixture 3 has value Draw')
            // }

            // console.log("fixture = " + fixtureOne.getText().toString() + "" + fixtureTwo.getText().toString() + "" + fixtureThree.getText().toString());

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
            // browser.element(:tag_name, 'html').attribute_value('lang')
            // fixtureOneBestHref.


            // var elementValue = browser.driver.executeScript('document.querySelectorAll("tr.oc-table__tr > td.best > a")[0].href');
            // console.log('fixture onr best href ' + elementValue);

            function test1() {
                getFixtureOneBestHref().then(function (item) {
                    console.log(item);
                    var str = item;
                    var res = str.substring(32, 36);
                    switch (res) {
                        case 0:
                            res = "ubet";
                            console.log('its ubet site');
                            break;
                        case 1:
                            res = "luxb";
                            console.log('its luxbet site');
                            break;
                        case 2:
                            res = "Ladb";
                            console.log('its Ladbrokes site');
                            break;
                        case 3:
                            res = "Spor";
                            console.log('its Sportsbet site');
                            break;
                        case 4:
                            res = "will";
                            console.log('its williamhill site');
                            break;
                        case 5:
                            res = "unib";
                            console.log('its unibet site');
                            break;
                        case 6:
                            res = "Book";
                            console.log('its Bookmaker site');
                            break;
                        case 7:
                            res = "Crow";
                            console.log('its Crownbet site');
                    }
                    // if (res === 'ubet') {
                    //     console.log('its ubet site');
                    // }
                    // else if (res === 'luxbet') {
                    //     console.log('its luxbet site');
                    // }
                    // else if (res === 'luxbet') {
                    //     console.log('its luxbet site');
                    // }
                });
            }

            function test2() {
                getFixtureTwoBestHref().then(function (item) {
                    console.log(item);
                    var str = item;
                    var res = str.substring(32, 38);
                    switch (res) {
                        case 0:
                            res = "ubet";
                            console.log('its ubet site');
                            break;
                        case 1:
                            res = "luxb";
                            console.log('its luxbet site');
                            break;
                        case 2:
                            res = "Ladb";
                            console.log('its Ladbrokes site');
                            break;
                        case 3:
                            res = "Spor";
                            console.log('its Sportsbet site');
                            break;
                        case 4:
                            res = "will";
                            console.log('its williamhill site');
                            break;
                        case 5:
                            res = "unib";
                            console.log('its unibet site');
                            break;
                        case 6:
                            res = "Book";
                            console.log('its Bookmaker site');
                            break;
                        case 7:
                            res = "Crow";
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

            // console.log('fixture onr best href ' + test());


            // console.log(fixtureOneBest.href);
            // console.log(fixtureTwoBest.href);
            // console.log(fixtureThreeBest.href);

            // return console.log("fixture = " + fixture1Best + "" + fixtureTwo + "" + fixtureThree);

            // if (fixture3)
        });
    };
}).call(this);