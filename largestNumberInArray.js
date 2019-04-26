/**
 * @param {array} Array
 * @return {Array}  Return an array consisting of the largest number from each provided sub-array
 */
module.exports = function largestNumberFromArray(array = []) {
    let _array = [];
    for (let i = 0; i < array.length; i++) {
        let max = array[i].reduce((x, y) => { return Math.max(x, y) });
        _array.push(max);
    }
    return _array;
}