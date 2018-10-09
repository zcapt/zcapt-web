let Base64 = require('js-base64').Base64;
let a = {
    init: "https://api.thatseed.org/captcha/newCaptcha",
    large: "https://api.thatseed.org/captcha/getImage",
    small: "https://api.thatseed.org/captcha/getSmallImage",
    veri: "https://api.thatseed.org/captcha/verify"
};
console.log(Base64.encode(JSON.stringify(a)));