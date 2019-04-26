module.exports = function findElement(arr, func) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {

        if (func(arr[i])) {
            num = arr[i];
            break;
        }
        return undefined;
    }
    return num;
}



/**
 * const findEl = (arr,cb){
 * retun arr.find((el)=>cb(el))?arr.find((el)=>cb(el)):undefined;
 * }
 */

findElement([1, 2, 3, 4], num => num % 2 === 0);