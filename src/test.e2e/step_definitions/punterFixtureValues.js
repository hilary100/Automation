(function () {
    module.exports = function () {

        this.World = require('cukefarm').World;
        var q = require('q');

        this.Then(/^I get best values of table one$/, function () {
            var that = this;
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
                return console.log('fixture three value is ' + fixture3);
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
                    var res = str.substring(29, 33);
                    console.log(res);
                    if (res === "ubet") {
                        console.log('its ubet site');
                        that.currentPage = new that.pageObjectMap['UbetHome'];
                        that.currentPage.get();
                        return that.currentPage.waitForLoaded().then(function () {
                            console.log("Visited Ubet")
                        });
                    }
                    else if (res === "luxb") {
                        console.log('its luxbet site');
                        that.currentPage = new that.pageObjectMap['LuxbetHome'];
                        that.currentPage.get();
                        return that.currentPage.waitForLoaded().then(function () {
                            console.log("Visited Luxbet")
                        });
                    }
                    else if (res === "ladb") {
                        console.log('its Ladbrokes site');
                        that.currentPage = new that.pageObjectMap['LadbrokesHome'];
                        that.currentPage.get();
                        return that.currentPage.waitForLoaded().then(function () {
                            console.log("Visited Ladbrokes")
                        });
                    }
                    else if (res === "spor") {
                        console.log('its Sportsbet site');
                        that.currentPage = new that.pageObjectMap['SportBetHome'];
                        that.currentPage.get();
                        return that.currentPage.waitForLoaded().then(function () {
                            console.log("Visited SportBet")
                        });
                    }
                    else if (res === "will") {
                        console.log('its williamhill site');
                        that.currentPage = new that.pageObjectMap['WilliamHillHome'];
                        that.currentPage.get();
                        return that.currentPage.waitForLoaded().then(function () {
                            console.log("Visited williamhill")
                        });
                    }
                    else if (res === "unib") {
                        console.log('its unibet site');
                        that.currentPage = new that.pageObjectMap['UnibetHome'];
                        that.currentPage.get();
                        return that.currentPage.waitForLoaded().then(function () {
                            console.log("Visited Unibet")
                        });
                    }
                    else if (res === "book") {
                        console.log('its Bookmaker site');
                        that.currentPage = new that.pageObjectMap['BookmakerHome'];
                        that.currentPage.get();
                        return that.currentPage.waitForLoaded().then(function () {
                            console.log("Visited Bookmaker")
                        });
                    }
                    else if (res === "crow") {
                        console.log('its Crownbet site');
                        that.currentPage = new that.pageObjectMap['CrownbetHome'];
                        that.currentPage.get();
                        return that.currentPage.waitForLoaded().then(function () {
                            console.log("Visited Crownbet")
                        });
                    }
                });
                that.currentPage = new that.pageObjectMap['PunterSoccerHome'];
                that.currentPage.get();
                return that.currentPage.waitForLoaded();
            }

            function test2() {
                getFixtureTwoBestHref().then(function (item) {
                    console.log(item);
                    var str = item;
                    var res = str.substring(29, 33);
                    console.log(res);
                    if (res === "ubet") {
                        console.log('its ubet site');
                        that.currentPage = new that.pageObjectMap['UbetHome'];
                        that.currentPage.get();
                        return that.currentPage.waitForLoaded().then(function () {
                            console.log("Visited Ubet")
                        });
                    }
                    else if (res === "luxb") {
                        console.log('its luxbet site');
                        that.currentPage = new that.pageObjectMap['LuxbetHome'];
                        that.currentPage.get();
                        return that.currentPage.waitForLoaded().then(function () {
                            console.log("Visited Luxbet")
                        });
                    }
                    else if (res === "ladb") {
                        console.log('its Ladbrokes site');
                        that.currentPage = new that.pageObjectMap['LadbrokesHome'];
                        that.currentPage.get();
                        return that.currentPage.waitForLoaded().then(function () {
                            console.log("Visited Ladbrokes")
                        });
                    }
                    else if (res === "spor") {
                        console.log('its Sportsbet site');
                        that.currentPage = new that.pageObjectMap['SportBetHome'];
                        that.currentPage.get();
                        return that.currentPage.waitForLoaded().then(function () {
                            console.log("Visited SportBet")
                        });
                    }
                    else if (res === "will") {
                        console.log('its williamhill site');
                        that.currentPage = new that.pageObjectMap['WilliamHillHome'];
                        that.currentPage.get();
                        return that.currentPage.waitForLoaded().then(function () {
                            console.log("Visited WilliamHill")
                        });
                    }
                    else if (res === "unib") {
                        console.log('its unibet site');
                        that.currentPage = new that.pageObjectMap['UnibetHome'];
                        that.currentPage.get();
                        return that.currentPage.waitForLoaded().then(function () {
                            console.log("Visited Unibet")
                        });
                    }
                    else if (res === "book") {
                        console.log('its Bookmaker site');
                        that.currentPage = new that.pageObjectMap['BookmakerHome'];
                        that.currentPage.get();
                        return that.currentPage.waitForLoaded().then(function () {
                            console.log("Visited Bookmaker")
                        });
                    }
                    else if (res === "crow") {
                        console.log('its Crownbet site');
                        that.currentPage = new that.pageObjectMap['CrownbetHome'];
                        that.currentPage.get();
                        return that.currentPage.waitForLoaded().then(function () {
                            console.log("Visited Crownbet")
                        });
                    }
                });
                that.currentPage = new that.pageObjectMap['PunterSoccerHome'];
                that.currentPage.get();
                return that.currentPage.waitForLoaded();
            }

            function test3() {
                getFixtureThreeBestHref().then(function (item) {
                    console.log(item);
                    var str = item;
                    var res = str.substring(29, 33);
                    console.log(res);
                    if (res === "ubet") {
                        console.log('its ubet site');
                        that.currentPage = new that.pageObjectMap['UbetHome'];
                        that.currentPage.get();
                        return that.currentPage.waitForLoaded().then(function () {
                            console.log("Visited Ubet")
                        });
                    }
                    else if (res === "luxb") {
                        console.log('its luxbet site');
                        that.currentPage = new that.pageObjectMap['LuxbetHome'];
                        that.currentPage.get();
                        return that.currentPage.waitForLoaded().then(function () {
                            console.log("Visited Luxbet")
                        });
                    }
                    else if (res === "ladb") {
                        console.log('its Ladbrokes site');
                        that.currentPage = new that.pageObjectMap['LadbrokesHome'];
                        that.currentPage.get();
                        return that.currentPage.waitForLoaded().then(function () {
                            console.log("Visited Ladbrokes")
                        });
                    }
                    else if (res === "spor") {
                        console.log('its Sportsbet site');
                        that.currentPage = new that.pageObjectMap['SportBetHome'];
                        that.currentPage.get();
                        return that.currentPage.waitForLoaded().then(function () {
                            console.log("Visited SportBet")
                        });
                    }
                    else if (res === "will") {
                        console.log('its williamhill site');
                        that.currentPage = new that.pageObjectMap['WilliamHillHome'];
                        that.currentPage.get();
                        return that.currentPage.waitForLoaded().then(function () {
                            console.log("Visited WilliamHill")
                        });
                    }
                    else if (res === "unib") {
                        console.log('its unibet site');
                        that.currentPage = new that.pageObjectMap['UnibetHome'];
                        that.currentPage.get();
                        return that.currentPage.waitForLoaded().then(function () {
                            console.log("Visited Unibet")
                        });
                    }
                    else if (res === "book") {
                        console.log('its Bookmaker site');
                        that.currentPage = new that.pageObjectMap['BookmakerHome'];
                        that.currentPage.get();
                        return that.currentPage.waitForLoaded().then(function () {
                            console.log("Visited Bookmaker")
                        });
                    }
                    else if (res === "crow") {
                        console.log('its Crownbet site');
                        that.currentPage = new that.pageObjectMap['CrownbetHome'];
                        that.currentPage.get();
                        return that.currentPage.waitForLoaded().then(function () {
                            console.log("Visited Crownbet")
                        });
                    }
                });
                that.currentPage = new that.pageObjectMap['PunterSoccerHome'];
                that.currentPage.get();
                return that.currentPage.waitForLoaded();
            }

            function getFixtureOneBestValue() {
                return browser.wait(function () {
                    return fixtureOneBest.getText().then(function (value) {
                        return value;
                    });
                });
            }

            // function getFixtureOneBestValue() {
            //     return fixtureOneBest.getText();
            // }
            function getFixtureTwoBestValue() {
                return browser.wait(function () {
                    return fixtureTwoBest.getText().then(function (value) {
                        return value;
                    });
                });
            }

            function getFixtureThreeBestValue() {
                return browser.wait(function () {
                    return fixtureThreeBest.getText().then(function (value) {
                        return value;
                    });
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

            function getFixtureThreeBestHref() {
                return browser.wait(function () {
                    return fixtureThreeBest.getAttribute('href').then(function (value) {
                        return value;
                    });
                });
            }

            // function testingTesting() {
            //     var value = "testing this to see";
            //     return value;
            // }
            //
            // var stillTesting = testingTesting();
            //
            // console.log('did it work? ' + stillTesting);

            // calculate percentage

            function getFixtureOneBestCalc() {
                function testing() {
                    return getFixtureOneBestValue().then(function (value) {
                        console.log(value);
                        var numerator = 1;
                        var denominator = value;
                        var investmentAmount = 500;
                        var result = numerator / denominator;
                        var invest = investmentAmount * result;
                        console.log("Result 1 is = " + result.toFixed(2));
                        console.log("Invest = " + invest.toFixed(2));
                        return result.toFixed(2);
                    });
                }

                function testing2() {
                    return getFixtureTwoBestValue().then(function (value) {
                        console.log(value);
                        var numerator = 1;
                        var denominator = value;
                        var investmentAmount = 500;
                        var result = numerator / denominator;
                        var invest = investmentAmount * result;
                        console.log("Result 2 is = " + result.toFixed(2));
                        // return console.log("Invest = " + invest.toFixed(2));
                        return result.toFixed(2);
                    });

                }

                // return getFixtureOneBestValue().then(function (value) {
                //     console.log(value);
                //     var numerator = 1;
                //     var denominator = value;
                //     var investmentAmount = 500;
                //     var result = numerator/denominator;
                //     var invest = investmentAmount * result;
                //     console.log("Result is = " + result.toFixed(2));
                //     // return console.log("Invest = " + invest.toFixed(2));
                //     return result.toFixed(2);
                // });
            }

            getFixtureOneBestCalc();
            test1();
            test2();
            test3();

            // function test1(){
            //     return 100;
            // }
            //
            // function test2(){
            //     var somevariable = "globllysetValue";
            //     var returnValue = test1();
            //     var test = 100;
            //     var result = returnValue + test
            //     // some code and work according to the value in returnValue
            //     alert(result);
            // }

            // test2();

            // calculatePercentage();
        });
    };
}).call(this);