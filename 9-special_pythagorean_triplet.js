/* Solution Function */
let specialPythagoreanTriplet = (targetValue) => {

    /* Product will be abc and returned */
    let product
    
    let a
    let b
    /* Go through every possible value a can be */
    for(a = 1; a < targetValue - 2; a ++){
        /* Go through every possbile b can be (greater than a) */
        for(b = a + 1; b < targetValue - 1; b++){
            /* Calculate c squared -> a squared + b squared */
            let cSquared = Math.pow(a, 2) + Math.pow(b, 2)
            /* Calculate c */
            let c = Math.sqrt(cSquared)

            /*If c is an integer, and (a + b + c === target value), then
                we have found a solution */
                
            if(Number.isInteger(c) && (a + b + c) === targetValue){
                product = a * b * c
                console.log('a is ' + a)
                console.log('b is '+ b)
                console.log('c is ' + c)
                return product
            }
        }
    }

    return product
}

/* Check Solution */
console.log('Result is ' + specialPythagoreanTriplet(1000))