let initia = require('../src/request/initialize');
global.XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let assert = require('assert');

describe("Initialize Test", () => {
    it("Communicate with Server",(done) => {
        initia.init("https://api.thatseed.org/captcha/newCaptcha",(result) => {
            if (result === null) {
                assert.fail("Error")
            }
            done();
        })
    })
});