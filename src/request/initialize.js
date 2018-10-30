/*
* method init
* @usage initialize the captcha by sending Get request to server side.
* @para iniLink server side initialize link
* @First parameter of callback function is the authID. If error, the parameter would be null
* */
exports.init = (initLink,callback) => {
    let req = new XMLHttpRequest();
    req.open("GET",initLink,true);
    req.send(null);
    req.onload = () => {
        if (req.status !== 200) {
            verifyCb(callback,null);
            return null;
        }else {
            let response = null;
            try {
                response = JSON.parse(req.responseText)
            }catch (e) {
                verifyCb(callback,null);
                return null;
            }
            if (response.status === undefined) {
                verifyCb(callback,null);
                return null;
            }else if (response.status !== '0') {
                verifyCb(callback,null);
                return null;
            }else {
                // Normal
                verifyCb(callback,response.authID);
                return null;
            }
        }
    };
    // When timeout
    req.timeout = 1000;
    req.ontimeout = verifyCb(callback,null);
};
function verifyCb(callback,param) {
    if (callback !== undefined) {
        callback(param)
    }
}
