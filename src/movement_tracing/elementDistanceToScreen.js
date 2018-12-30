exports.distance = (element) => {
    /*
    * Get the element's current distance between the border of element to the border of screen.
    * @param picture is the element which you wana to get the distance between the element's border and the screen's border.
    * @return The function would return an object with top, left, right, bottom
    * */
    let pictureTop = element.getBoundingClientRect().top;
    let pictureLeft = element.getBoundingClientRect().left;
    let pictureRight = pictureLeft + element.offsetWidth;
    let pictureBottom = pictureTop + element.offsetHeight;
    return {
        top: pictureTop,
        left: pictureLeft,
        right: pictureRight,
        bottom: pictureBottom
    }
}