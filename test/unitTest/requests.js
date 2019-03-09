let initia = require('../../src/request/initialize');
let verify = require('../../src/request/verify');
global.XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let assert = require('assert');
let config = require('../testConfig');


describe("Unit test for requests module", () => {
    it("Communicate with Server to initializing the captcha",function(done) {
        this.timeout(2000);
        initia.init(config.testingInitialURL,(result) => {
            if (result === null) {
                assert.fail("Error when initializing the captcha")
            }
            done();
        })
    });
    it("Communicate with Server to verify the captcha",function(done) {
        this.timeout(2000);
        verify.verify(config.testingVerifyURL, "000000000", 20, 20, () => {
            done();
        })
    })
});