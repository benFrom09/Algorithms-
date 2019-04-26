module.exports = function confirmEnding(str, target) {
    let len = target.length;
    if (str.slice((str.length - 1) - (len - 1)) === target) {
        return true;
    }
    return false;
}