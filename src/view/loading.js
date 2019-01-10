let appearAndDisappear = require('./appearAndDisappear');
exports.loading = {
    start: (callback = () => {}) => {
        // Create Loading Layer
        let loadingLayer = document.createElement("div");
        loadingLayer.id = "zcapt-loadingLayer";
        loadingLayer.className = "zcapt-loading";
        loadingLayer.innerHTML = "<div></div><div></div>";
        appearAndDisappear.appear(loadingLayer,callback);
        document.getElementById("zcapt-frame").appendChild(loadingLayer);
    },
    end: (callback = () => {}) => {
        // Remove Loading Layer
        appearAndDisappear.disappear(document.getElementById("zcapt-loadingLayer"),callback);
    }
};