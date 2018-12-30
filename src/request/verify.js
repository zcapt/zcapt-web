exports.verify = (url,authID,x,y,callback) => {
    /**
     * Function for verify the coordinate
     * @param url requesting URL for verify
     * @param authID the authID of captcha.
     * @param x & y the x and y coordinate of small image in large picture
     * @callback callback function
     * The first parameter in callback function equals true if verified.
     * Equals false if verified failure.
     */
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