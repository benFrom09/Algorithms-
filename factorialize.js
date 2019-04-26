/**
 * la factorielle d'un entier naturel n est le produit des nombres entiers 
 * strictement positifs inférieurs ou égaux à n.
 * @param {number} number
 * @type {number}
 * @return {number} number factorial of the given integer
 */

module.exports = function factorialise(num) {
    if (typeof Number(num) !== "number") throw new Error('Argument must be number convertible');
    if (num === 0) {
        return 1;
    }
    return num * factorialise(num - 1);
}