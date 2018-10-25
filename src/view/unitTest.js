exports.frameBuild = () => {
    require('./initialize').frameBuild("test",370,"https://api.thatseed.org/captcha/getSmallImage?authID=1479771269538896","https://api.thatseed.org/captcha/getImage?authID=1479771269538896");
    require('./initialize').importStyle();
};