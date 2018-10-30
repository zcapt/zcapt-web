exports.building = ()=>{
    require('../view/initialize').importStyle();
    require('../view/initialize').frameBuild(window.zcapt.data.authID,window.zcapt.data.size,window.zcapt.data.smallPicture,window.zcapt.data.largePicture,);
};