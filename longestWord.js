module.exports = function findLongestWordLength(str) {
    let max = (a, b) => {
        return a > b;
    }
    let temp = 0;
    let split = str.split(' ');
    for (let i = 0; i < split.length; i++) {
        if (max(split[i].length, temp)) {
            temp = split[i].length;
        }
    }
    return temp;
}

