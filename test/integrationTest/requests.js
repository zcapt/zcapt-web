let initia = require('../../src/request/initialize');
let verify = require('../../src/request/verify');
let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

global.XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let assert = require('assert');
let config = require('../testConfig');

describe("Integration test for requests; initialize and then verify for right value", () => {
    it("Communicate with Server to and testing the right value",function(done) {


        this.timeout(0);
        console.log("Initialize and then verify for right value!!! \n");

        Promise.resolve()

            .then(function () {
                return new Promise(function (resolve) {
                    initia.init(config.testingInitialURL,(result) => {
                        if (result === null) {
                            assert.fail("Error when initializing the captcha")
                        }else {
                            resolve(result);
                        }
                    })
                })
            })

            .then(function (authID) {
                return new Promise(function (resolve) {
                    rl.question("Input the X value of authID " + authID + " from backend\n",function (x) {
                        resolve({
                            x: parseInt(x),
                            authID: authID
                        });
                    });
                })
            })

            .then(function (data) {
                return new Promise(function (resolve) {
                    rl.question("Input the Y value of authID " + data.authID + " from backend\n",function (y) {
                        resolve({
                            x: data.x,
                            y: parseInt(y),
                            authID: data.authID
                        });
                    });
                })
            })

            .then(function (data) {
                rl.close();
                verify.verify(config.testingVerifyURL,data.authID,data.x,data.y,function (result) {
                    if (result) {
                        done();
                    } else {
                        assert.fail("Error when verifying the captcha");
                    }
                    return null;
                })
            });
    });

    it('Communicate to server and test the wrong value', function (done) {
        console.log("Start to test the wrong value");
        Promise.resolve()

            .then(function () {
                return new Promise(function (resolve) {
                    initia.init(config.testingInitialURL,(result) => {
                        if (result === null) {
                            assert.fail("Error when initializing the captcha")
                        }else {
                            resolve(result);
                        }
                    })
                })
            })

            .then(function (authID) {
                verify.verify(config.testingVerifyURL,authID,0,0,function (result) {
                    if (result) {
                        assert.fail("The result is true when using the wrong value");
                    } else {
                        done();
                    }
                    return null;
                })
            })
    });
});