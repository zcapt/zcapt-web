exports.renewCaptcha = () => {
    // Requesting to server to get a new authID
    require('../request/initialize').init(window.zcapt.data.initialize,(authID) => {
        if (authID === null) {
            console.log("Error when requesting to server");
            return null;
        } else {
            window.zcapt.data.authID = authID;

            // Start to building the captcha
            require('./buildCaptchaInPage').building(true);
        }
    });
};