/* Factorial Function */
let factorial = (number) => {

    if(number === 1){
        return 1;
    }else{
        return number * factorial(number - 1);
    }
}

let latticePaths = (gridSize) => {

    /* 
        Based on Binomial Coeffecient Forumula at 
        https://en.wikipedia.org/wiki/Binomial_coefficient#Factorial_formula
    */

    n = 2 * gridSize // Number of Choices to make
    k = gridSize // Number of times each choice can be made

    /* n!/k!(n-k)! */
    return factorial(n)/(factorial(k) * factorial(n-k));

}
/* Check Solution */
console.log('Result is ' + latticePaths(4))