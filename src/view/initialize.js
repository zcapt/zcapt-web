exports.importStyle = () => {
    require('./style/frame.scss');
};

exports.frameBuild = (boxid,size,authID,smallPic,largePic) => {
    // Create frame
    let outer = document.createElement("div");
    outer.classList.add('zcapt-frame');
    outer.style.height = size + "px";
    outer.style.width = size + "px";

    // Create small picture
    let smallPicture = new Image();
    smallPicture.classList.add('zcapt-smallPic');
    smallPicture.src = smallPic + '?authID=' + authID;


    // Large PIcture
    let largePicture = new Image();
    largePicture.classList.add('zcapt-largePic');
    largePicture.src = largePic + '?authID=' + authID;

    // Title
    let title = document.createElement("div");
    title.classList.add('zcapt-title');

    // Append them to 'outer'
    outer.appendChild(smallPicture);
    outer.appendChild(largePicture);
    outer.appendChild(title);

    // render them
    document.getElementById(boxid).appendChild(outer);
};