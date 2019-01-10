exports.disappear = (element,callback = () =>{}) => {
    /**
     * Function to make things disappear gently
     * @param element DOM element which is going to be deleted.
     */

    // Make sure that the element does have appearing animation
    if (element.classList.contains("zcapt-appear")) {
        element.addEventListener("animationend",startDisappear());
    }else {
        startDisappear();
    }

    // Sub function for disappearing
    function startDisappear() {
        element.classList.add("zcapt-disappear");
        element.addEventListener("animationend",() => {
            element.parentNode.removeChild(element);
            callback();
        });
    }
};

exports.appear = (element,callback = () => {}) => {
    /**
     * Function to make transparent things appear on page gently
     * @param element DOM element which is going to be appeared on page.
     */

    // Make sure that the element does have appearing animation
    if (element.classList.contains("zcapt-disappear")) {
        callback();
    }else {
        element.classList.add("zcapt-appear");
        element.addEventListener("animationend",() => {
            element.classList.remove("zcapt-appear");
            callback();
        });
    }
};