window.zcapt = {
    start: (para) => {
        // Nothing to do if no or lack of params
        if (para.id === undefined || para.conn === undefined)  {
            return null;
        }
        document.write(para.id + " " + para.conn);

    }
};