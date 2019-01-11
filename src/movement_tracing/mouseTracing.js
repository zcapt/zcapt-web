exports.startMouseMonitor = (smallPictureID,largePictureID) => {
    /*
    * Method for mouse monitor
    * @param smallPictureID Small picture's element ID
    * @param largePictureID Large picture's element ID
    * */
    let smallPic = document.getElementById(smallPictureID);
    let largePic = document.getElementById(largePictureID);


    // While the user click on small picture
    smallPic.onmousedown = (onmouseDownEvent) => {

        // Get the initial position of small picture
        window.zcapt.data.smallPictureInitialPositionX = smallPic.offsetLeft;
        window.zcapt.data.smallPictureInitialPositionY = smallPic.offsetTop;

        // Get the position of mouse inside the small picture
        let distanceXFromCentralMouseToSmallPictureBorder = onmouseDownEvent.clientX - smallPic.offsetLeft;
        let distanceYFromCentralMouseToSmallPictureBorder = onmouseDownEvent.clientY - smallPic.offsetTop;

        // While the user click on the small picture and move the mouse
        document.onmousemove = (onmouseMoveEvent) => {
            smallPic.style.top = (onmouseMoveEvent.clientY - distanceYFromCentralMouseToSmallPictureBorder) + "px";
            smallPic.style.left = (onmouseMoveEvent.clientX - distanceXFromCentralMouseToSmallPictureBorder) + "px";
        };

        // While the user release the mouse·
        document.onmouseup = (onmouseUpEvent) => {

            // Stop moving
            document.onmousemove = null;
            let largePictureDistanceToScreen = require('./elementDistanceToScreen').distance(largePic);
            // Get coordinate of small picture inside of large picture
            let xCoordinate = ((smallPic.offsetLeft - largePic.offsetLeft) * 300) / largePic.offsetWidth;
            let yCoordinate = ((smallPic.offsetTop - largePic.offsetTop) * 200) / largePic.offsetHeight;

            if (onmouseUpEvent.clientY >  largePictureDistanceToScreen.top&& onmouseUpEvent.clientY < largePictureDistanceToScreen.bottom && onmouseUpEvent.clientX > largePictureDistanceToScreen.left && onmouseUpEvent.clientX < largePictureDistanceToScreen.right) {
                require('../view/loading').loading.start();
                smallPic.onmousedown = null;
                document.onmouseup = null;
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

