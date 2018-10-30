let Base64 = require('js-base64').Base64;
exports.init = (id,conn,size) => {
    /**
     * Method for initialize the captcha
     * @para id element's id where the captcha would be made.
     * @para conn connection code from server side.
     * @para size the width of the captcha that would be created.
     * no callback function
     */
    // Parse the links
    try {
        let links = JSON.parse(Base64.decode(conn));
        // Assign all the links to model data
        window.zcapt.data.initialize = links.init;
        window.zcapt.data.largePicture = links.large;
        window.zcapt.data.smallPicture = links.small;
        window.zcapt.data.verify = links.veri;
        window.zcapt.data.id = id;
        window.zcapt.data.size = size;
    }catch (e) {
        // If error in "conn" parameter
        console.log("Conn is incorrect");
        return null;
    }
    require('../request/initialize').init(window.zcapt.data.initialize,(authID) => {
        if (authID === null) {
            console.log("Error when requesting to server");
            return null;
        } else {
            window.zcapt.data.authID = authID;
            require('./buildCaptchaInPage').building();
        }
    });
};