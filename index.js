// The entrance
window.zcapt = {
    start: (para,callback = () => {}) => {
        window.zcapt.onverified = callback;

        // Nothing to do if no or lack of params
        if (para.id === undefined || para.conn === undefined) {
            return null;
        }
        if (para.id === null || para.conn === null) {
            return null;
        }

        // Start initialization
        require('./src/initialize/initialize').init(para.id,para.conn);
    },

    // Model data storage
    data:require('./src/model/data'),

    // API for getting the result of captcha.
    isVerified: () => {
        if (window.zcapt.data.result !== undefined) {
            return window.zcapt.data.result === 1;
        }else{
            return false;
        }
    },

    // Get AuthID
    getAuthID: () => {
        if (window.zcapt.data.authID !== undefined) {
            return window.zcapt.data.authID;
        } else {
            return null;
        }
    }
};