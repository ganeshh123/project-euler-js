/* Solution Function */
let divisibleTriangleNumber = (n) => {

    /* For every divisior below root n, there is also one above root n */
    let currentTriangular = 0
    let count = 0

    while(true){

        /* Generate a new triangular number */
        count = count + 1
        currentTriangular = currentTriangular + count

        /* Look for divisors between 2 and square root n, if we find one
            there is also one above, so add 2 to the divisor count */

        let divisorCount = 0
        let i
        for(i = 1; i < Math.sqrt(currentTriangular); i ++){
            if(currentTriangular % i === 0){
                divisorCount = divisorCount + 2;
            }
        }
        if(Number.isInteger(Math.sqrt(currentTriangular))){
            divisorCount = divisorCount + 1
        }

        console.log('Generated Triangular ' + currentTriangular + ' with ' + divisorCount + ' divisors.')

        /* If number of divisors exceed n, then return the triangular number */
        if(divisorCount > n){
            return currentTriangular
        }
    }

}

/* Check Solution */
console.log('Result is ' + divisibleTriangleNumber(500))