exports.initialize = () => {
    require('./initialize').init("https://api.thatseed.org/captcha/newCaptcha",(authID) => {
        console.log(authID);
    });
};
