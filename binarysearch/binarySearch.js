
let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
/*
input = array
n = number of element in array
target = number searched for
output = index in array of target

1) let min = 0 max = n - 1
2)compute mid as the average of max and min (rounded down)
3)if array[mid] === target return mid
4)if array[mid] < target min = mid + 1
5)else mid was too hight max = mid -1
go back to step 1
6)
*/

function binarySearch(array, target) {
    let min = 0;
    let max = array.length - 1;
    let mid;
    while (min <= max) {
        mid = Math.floor((max + min) / 2)
        if (array[mid] === target) return mid;
        if (array[mid] < target) {
            min = mid + 1;
        }
        else {
            max = mid - 1;
        }

    }
    return -1;
}


console.log(binarySearch(primes, 67));

