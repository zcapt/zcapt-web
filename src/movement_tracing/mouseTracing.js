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

        // While the user release the mouse
        document.onmouseup = () => {

            // Stop moving
            document.onmousemove = null;

            // Get coordinate of small picture inside of large picture
            let xCoordinate = ((smallPic.offsetLeft - largePic.offsetLeft) * 300) / largePic.offsetWidth;
            let yCoordinate = ((smallPic.offsetTop - largePic.offsetTop) * 200) / largePic.offsetHeight;


            require('../view/elementMove').move(smallPic,window.zcapt.data.smallPictureInitialPositionX,window.zcapt.data.smallPictureInitialPositionY);
        }
    }
};