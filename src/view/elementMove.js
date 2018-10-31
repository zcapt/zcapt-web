exports.move = (element,moveToX,moveToY) => {
    let startX = element.offsetLeft;
    let startY = element.offsetTop;
    let deltaX = 0;
    let deltaY = 0;

    // Verify if the picture is on the left or the right toward the original position.
    if (startX < moveToX) {
        // On the left
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
        // On the right
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

    // Verify if the picture is on the top or the bottom toward the original position.
    if (startY < moveToY) {
        // On the top
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
        // On the bottom
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