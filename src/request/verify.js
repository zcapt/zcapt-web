exports.verify = (url,authID,x,y,callback) => {
     let request = new XMLHttpRequest();
     let requestURL = url + "?authID=" + authID +"&x=" + x + "&y=" + y;
     request.open("GET",requestURL,true);
     request.send();
     request.addEventListener("load",() => {
         if (request.status !== 200) {
             callback(false);
         }else {
             let result = false;
             try {
                 result = JSON.parse(request.responseText).status;
             }catch (e) {
                 callback(false);
             }
             if (result != 0) {
                 callback(false);
             } else {
                 callback(true);
             }
         }
     })
};