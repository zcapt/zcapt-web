let Base64 = require('js-base64').Base64;
exports.init = (id,conn) => {

    // Parse the links
    try {
        let links = JSON.parse(Base64.decode(conn));
        // Assign all the links to model data
        window.zcapt.data.initialize = links.init;
        window.zcapt.data.largePicture = links.large;
        window.zcapt.data.smallPicture = links.small;
        window.zcapt.data.verify = links.veri;
        window.zcapt.data.id = id;
    }catch (e) {
        // If error in "conn" parameter
        console.log("Conn is incorrect");
        return null;
    }
    let initialize = require('../lib/request/initialize').init(window.zcapt.data.initialize);
    if (initialize === null) {
        console.log("Error when requesting to server");
        return null;
    } else {
        window.zcapt.data.id = initialize;
    }
};