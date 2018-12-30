let animation = require('./animation');
exports.everything = ()=> {
    /**
     * Function for remove everythings about zcapt, and recreate it.
     */
    animation.disappear(document.getElementById("zcapt-frame"),0.1,() => {
        require('../initialize/initialize').init(window.zcapt.data.id,window.zcapt.data.conn,window.zcapt.data.size);
    });
};