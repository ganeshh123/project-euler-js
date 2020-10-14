/* Solution Function */
let sumSquareDifference = (n) => {

    let squaredSum = 0    // Sum of each n value squared
    let sum = 0;          // Sum of each n value

    let i
    for(i = 1; i <= n; i ++){
        /* Add the number to sum */
        sum = sum + i;
        /* Add the square of the number to squaredSum */
        squaredSum = squaredSum + Math.pow(i, 2)
    }
    console.log('Sum of each number Squared is ' + squaredSum)

    let sumSquared = Math.pow(sum, 2)   //Square the sum of all numbers
    console.log('(Sum of all Numbers) Squared is ' + sumSquared)

    return sumSquared - squaredSum
}

/* Check Solution */
console.log('Result is ' + sumSquareDifference(100))