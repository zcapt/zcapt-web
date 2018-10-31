/*
* method init
* @usage initialize the captcha by sending Get request to server side.
* @para iniLink server side initialize link
* @First parameter of callback function is the authID. If error, the parameter would be null
* */
exports.init = (initLink,callback) => {
    let req = new XMLHttpRequest();
    req.open("GET",initLink,true);
    req.send();
    req.addEventListener("load",() => {
        if (req.status !== 200) {
            callback(null);
        }else {
            let response = null;
            try {
                response = JSON.parse(req.responseText)
            }catch (e) {
                callback(null);
            }
            if (response.status === undefined) {
                callback(null);
            }else if (response.status !== '0') {
                callback(null);
            }else {
                // Normal
                callback(response.authID);
            }
        }
    });
};
