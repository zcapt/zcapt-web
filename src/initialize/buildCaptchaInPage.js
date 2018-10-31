exports.building = ()=>{
    require('../view/initialize').importStyle();
    let smallPictureLink = window.zcapt.data.smallPicture + "?authID=" +  window.zcapt.data.authID;
    let largePictureLink = window.zcapt.data.largePicture + "?authID=" +  window.zcapt.data.authID;
    require('../view/initialize').frameBuild(window.zcapt.data.id,window.zcapt.data.size,smallPictureLink,largePictureLink,() => {
        require('../movement_tracing/mouseTracing').startMouseMonitor("zcapt-smallPic","zcapt-largePic");
    });
};