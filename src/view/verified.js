exports.verified = () => {
    /**
     * For changing the view while captcha is verified.
     * @type {HTMLElement}
     */

    let frame = document.getElementById("zcapt-frame");
    let verifiedLayer = document.createElement("div");
    verifiedLayer.id = "zcapt-verified";
    verifiedLayer.classList.add("zcapt-verified");

    // Creating SVG icon.
    // Tick icon
    let verifiedIcon = document.createElementNS("http://www.w3.org/2000/svg","svg");
    verifiedIcon.innerHTML = "<polygon class=\"zcapt-verified-fill\" points=\"385.621,62.507 146.225,301.901 21.213,176.891 0,198.104 146.225,344.327 406.834,83.72 \"/>";
    verifiedIcon.setAttribute("viewBox","0 0 406.834 406.834");
    verifiedIcon.id = "zcapt-verified-icon";
    require("./appearAndDisappear").appear(verifiedLayer, () => {
        window.zcapt.onverified();
    });
    verifiedLayer.appendChild(verifiedIcon);
    frame.appendChild(verifiedLayer);
    require("./loading").loading.end();
};