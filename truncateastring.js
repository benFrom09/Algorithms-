module.exports = function truncateString(str, num) {
    // Clear out that junk in your trunk
    if (str.length > num) {

        return str.slice(0, num) + "...";
    }
    return str;

}

