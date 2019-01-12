exports.rebuild = (smallPictureLink,largePictureLink,callback = () => {}) => {
    /**
     * Rebuilt picture in view. Replace the old pictures by new one.
     */

    let numberOfLoaded = 0;

    // Create small picture
    let smallPicture = new Image();
    smallPicture.classList.add('zcapt-smallPic');
    smallPicture.id = "zcapt-smallPic";
    smallPicture.draggable = false;
    smallPicture.src = smallPictureLink;
    smallPicture.setAttribute("unselectable", "on");
    smallPicture.onload = loadedCheck;

    // Large PIcture
    let largePicture = new Image();
    largePicture.classList.add('zcapt-largePic');
    largePicture.draggable = false;
    largePicture.id = "zcapt-largePic";
    largePicture.setAttribute("unselectable", "on");
    largePicture.src = largePictureLink;
    largePicture.onload = loadedCheck;

    let fragment = document.createDocumentFragment();
    fragment.appendChild(smallPicture);
    fragment.appendChild(largePicture);

    // Function for loading check.
    function loadedCheck() {
        if (numberOfLoaded === 0) { // If non of the picture has already loaded.
            numberOfLoaded ++;
        } else {
            // If one of the picture has already loaded,
            // render them
            let frame = document.getElementById("zcapt-frame");
            frame.removeChild(document.getElementById("zcapt-largePic"));
            frame.removeChild(document.getElementById("zcapt-smallPic"));
            frame.appendChild(fragment);
            require('./loading').loading.end(() => {
                callback(null);
            });
        }
    }
};