exports.disappear = (element,opacityChangedPerFrame,callback) => {
    /**
     * Function to make things disappear gently
     * @param element DOM element which is going to be deleted.
     */
    let opacity = 1;
    // Opacity changed per frame
    changeOpacity();
    function changeOpacity() {
        element.style.opacity = String(opacity);
        opacity -= opacityChangedPerFrame;
        if (opacity > 0) {
            requestAnimationFrame(changeOpacity)
        }else {
            // Remove element
            element.parentNode.removeChild(element);

            // Callback
            if (callback !== undefined) {
                callback();
            }
        }
    }

};