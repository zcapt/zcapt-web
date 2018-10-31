exports.startMouseMonitor = (smallPictureID,largePictureID) => {
    let smallPic = document.getElementById(smallPictureID);
    let largePic = document.getElementById(largePictureID);

    smallPic.onmousedown = (onmouseDownEvent) => {
        window.zcapt.data.smallPictureInitialPositionX = smallPic.offsetLeft;
        window.zcapt.data.smallPictureInitialPositionY = smallPic.offsetTop;
        let distanceXFromCentralMouseToSmallPictureBorder = onmouseDownEvent.clientX - smallPic.offsetLeft;
        let distanceYFromCentralMouseToSmallPictureBorder = onmouseDownEvent.clientY - smallPic.offsetTop;

        document.onmousemove = (onmouseMoveEvent) => {
            smallPic.style.top = (onmouseMoveEvent.clientY - distanceYFromCentralMouseToSmallPictureBorder) + "px";
            smallPic.style.left = (onmouseMoveEvent.clientX - distanceXFromCentralMouseToSmallPictureBorder) + "px";
        };

        document.onmouseup = () => {
            document.onmousemove = null;

            let xCoordinate = ((smallPic.offsetLeft - largePic.offsetLeft) * 300) / largePic.offsetWidth;
            let yCoordinate = ((smallPic.offsetTop - largePic.offsetTop) * 200) / largePic.offsetHeight;
            require('../view/elementMove').move(smallPic,window.zcapt.data.smallPictureInitialPositionX,window.zcapt.data.smallPictureInitialPositionY);
        }
    }
};