exports.init = (initLink,callback) => {
    let req = new XMLHttpRequest();
    req.open("GET",initLink,false);
    req.send(null);
    if (req.status === 200) {
        try {
            let authID = JSON.parse(req.responseText).authID
        }catch (e) {
            return {
                
            }
        }
    }
};

function returnMSG() {
    
}