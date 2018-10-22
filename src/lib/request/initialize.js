/*
* method init, synchronous
* @usage initialize the captcha by sending Get request to server side.
* @para iniLink server side initialize link
* @return method would return null if error occur. If no error, the method would return the authID
* */

exports.init = (initLink) => {
    // synchronous Http request
    let req = new XMLHttpRequest();
    req.open("GET",initLink,false);
    req.send(null);
    if (req.status !== 200) {
        return null;
    }else {
        let response = null;
        try {
            response = JSON.parse(req.responseText)
        }catch (e) {
            return null;
        }
        if (response.status === undefined) {
            return null;
        }else if (response.status !== '0') {
            return null;
        }else {
            return response.authID
        }
    }
};
