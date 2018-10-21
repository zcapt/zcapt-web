window.zcapt = {
    start: (para) => {
        // Nothing to do if no or lack of params
        if (para.id === undefined || para.conn === undefined || para.size === undefined) {
            return null;
        }
        if (para.id === null || para.conn === null || para.size === null) {
            return null;
        }
        // Start initialization
        require('./src/initialize/initialize').init(para.id,para.conn,para.size);
    },

    // Model data storage
    data:require('./src/model/links')
};

// For testing
 require('./src/lib/request/unitTest').initialize();