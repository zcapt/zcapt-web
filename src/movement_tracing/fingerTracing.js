exports.startFingerMonitor = (smallPictureID,largePictureID) => {
    /*
    * Method for finger touchpoint monitor
    * @param smallPictureID Small picture's element ID
    * @param largePictureID Large picture's element ID
    * */
    let smallPic = document.getElementById(smallPictureID);
    let largePic = document.getElementById(largePictureID);


    // While the user touch on small picture
    smallPic.ontouchstart = (ontouchdownEvent) => {

        // Get the initial position of small picture
        window.zcapt.data.smallPictureInitialPositionX = smallPic.offsetLeft;
        window.zcapt.data.smallPictureInitialPositionY = smallPic.offsetTop;

        // Get the position of finger inside the small picture
        let distanceXFromCentralMouseToSmallPictureBorder = ontouchdownEvent.touches[0].clientX - smallPic.offsetLeft;
        let distanceYFromCentralMouseToSmallPictureBorder = ontouchdownEvent.touches[0].clientY - smallPic.offsetTop;

        // While the user touch on the small picture and move the mouse
        document.ontouchmove = (ontouchmove) => {
            smallPic.style.top = (ontouchmove.touches[0].clientY - distanceYFromCentralMouseToSmallPictureBorder) + "px";
            smallPic.style.left = (ontouchmove.touches[0].clientX - distanceXFromCentralMouseToSmallPictureBorder) + "px";
        };

        // While the user release the mouse.
        document.ontouchend = (onTouchEndEvent) => {

            // Stop moving
            document.ontouchmove = null;
            let largePictureDistanceToScreen = require('./elementDistanceToScreen').distance(largePic);
            // Get coordinate of small picture inside of large picture
            let xCoordinate = Math.round(((smallPic.offsetLeft - largePic.offsetLeft) * 300) / largePic.offsetWidth);
            let yCoordinate = Math.round(((smallPic.offsetTop - largePic.offsetTop) * 200) / largePic.offsetHeight);

            if (onTouchEndEvent.changedTouches[0].clientY >  largePictureDistanceToScreen.top&& onTouchEndEvent.changedTouches[0].clientY < largePictureDistanceToScreen.bottom && onTouchEndEvent.changedTouches[0].clientX > largePictureDistanceToScreen.left && onTouchEndEvent.changedTouches[0].clientX < largePictureDistanceToScreen.right) {
                require('../view/loading').loading.start();
                smallPic.ontouchstart = null;
                require('../request/verify').verify(window.zcapt.data.verify,window.zcapt.data.authID,xCoordinate,yCoordinate, (verifyResult) => {
                    if (verifyResult) {
                        window.zcapt.data.result = 1;
                        require("../view/verified").verified();
                    }else {
                        require('../view/elementMove').move(smallPic,window.zcapt.data.smallPictureInitialPositionX,window.zcapt.data.smallPictureInitialPositionY);
                        require('../view/rebuilt').captcha();
                    }
                })
            }else {
                require('../view/elementMove').move(smallPic,window.zcapt.data.smallPictureInitialPositionX,window.zcapt.data.smallPictureInitialPositionY);
            }
        }
    }
};
