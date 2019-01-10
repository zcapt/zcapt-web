let animation = require('./appearAndDisappear');
exports.everything = ()=> {
    /**
     * Function for remove everythings about zcapt, and recreate it.
     */
    animation.disappear(document.getElementById("zcapt-frame"),() => {
        require('../initialize/initialize').init(window.zcapt.data.id,window.zcapt.data.conn,window.zcapt.data.size);
    });
};
exports.captcha = () => {
    /**
     * Function for create a new captcha, and put new picture on the clients side.
     */
    require('../initialize/reinitialize').renewCaptcha()
};