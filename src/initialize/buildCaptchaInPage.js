exports.building = ()=>{
    /*
    * Method for building the captcha in DOM
    * */
    let smallPictureLink = window.zcapt.data.smallPicture + "?authID=" +  window.zcapt.data.authID;
    let largePictureLink = window.zcapt.data.largePicture + "?authID=" +  window.zcapt.data.authID;

    // Add elements to DOM
    require('../view/initialize').buildCaptcha(smallPictureLink,largePictureLink,() => {
        // Start mouse tracking
        require('../movement_tracing/mouseTracing').startMouseMonitor("zcapt-smallPic","zcapt-largePic");
    });
};