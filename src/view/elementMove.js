exports.move = (element,moveToX,moveToY) => {
    /*
    * Method for moving the element in deceleration mode
    * */
    let startX = element.offsetLeft;
    let startY = element.offsetTop;
    let deltaX = 0;
    let deltaY = 0;

    // Verify which direction should the element move to.

    if (startX < moveToX) {
        // Move to the right
        deltaX = moveToX - startX;
        let moveElementRight = () => {
            element.style.left = element.offsetLeft + deltaX / 5 + "px";
            deltaX = deltaX - deltaX / 5;
            if (deltaX > 0) {
                window.requestAnimationFrame(moveElementRight);
            }
        };

        window.requestAnimationFrame(moveElementRight);
    } else {
        // Move to the left
        deltaX = startX - moveToX;

        let moveElementLeft = () => {
            element.style.left = element.offsetLeft - deltaX / 5 + "px";
            deltaX = deltaX - deltaX / 5;
            if (deltaX > 0) {
                window.requestAnimationFrame(moveElementLeft);
            }
        };

        window.requestAnimationFrame(moveElementLeft);
    }

    if (startY < moveToY) {
        // Move down
        deltaY = moveToY - startY;

        let moveElementDown = () => {
            element.style.top = element.offsetTop + deltaY / 5 + "px";
            deltaY = deltaY - deltaY / 5;
            if (deltaY > 0) {
                window.requestAnimationFrame(moveElementDown);
            }
        };

            window.requestAnimationFrame(moveElementDown);

    } else {
        // Move up
        deltaY = startY - moveToY;

        let moveElementUp = () => {
            element.style.top = element.offsetTop - deltaY / 5 + "px";
            deltaY = deltaY - deltaY / 5;
            if (deltaY > 0) {
                window.requestAnimationFrame(moveElementUp);
            }
        };

        window.requestAnimationFrame(moveElementUp);

    }
};