exports.initialize = () => {
    require('./initialize').init("https://api.thatseed.org/captcha/newCaptcha",(authID) => {
        console.log(authID);
    });
};

exports.verify = () => {
    require('./verify').init("http://zcapt.org",(authID) => {
        console.log(authID);
    });
};