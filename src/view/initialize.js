exports.importStyle = () => {
    require('./style/frame.scss');
};

exports.frameBuild = (boxid,size,smallPicUrl,largePicUrl,callback) => {

    // Number of pictures are loaded
    let numberOfLoaded = 0;

    // Create frame
    let outer = document.createElement("div");
    outer.classList.add('zcapt-frame');
    outer.style.height = (25 / 37) * size + "px";
    outer.style.width = size + "px";


    // Create small picture
    let smallPicture = new Image();
    smallPicture.classList.add('zcapt-smallPic');
    smallPicture.draggable = false;
    smallPicture.src = smallPicUrl;
    smallPicture.onload = loadedCheck;


    // Large PIcture
    let largePicture = new Image();
    largePicture.classList.add('zcapt-largePic');
    largePicture.draggable = false;
    largePicture.src = largePicUrl;
    largePicture.onload = loadedCheck;

    // Append them to 'outer'
    outer.appendChild(smallPicture);
    outer.appendChild(largePicture);

    function loadedCheck() {
        if (numberOfLoaded === 0) {
            numberOfLoaded ++;
        } else {
            // render them
            document.getElementById(boxid).appendChild(outer);
            if (callback !== undefined) {
                callback(null);
            }
        }
    }
};