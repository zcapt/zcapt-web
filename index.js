window.zcapt = {
    start: (para) => {
        // Nothing to do if no or lack of params
        if (para.id === undefined || para.conn === undefined) {
            return null;
        }

        // Start initialization
        require('./src/initialize/initialize').init(para.id,para.conn);
    },

    // Model data storage
    data:require('./src/model/links')
};