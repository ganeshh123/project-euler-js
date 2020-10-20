/* Solution Function */
let nthPrime = (n) => {

    /* Number of Terms generated */
    let count = 0
    /* First Prime Value */
    let candidateValue = 2
    /* Latest found Prime */
    let latestPrime

    while(count < n){

        /* Assume Prime until Proven Otherwise*/
        let isPrime = true

        /* Divide Candidate Value by all numbers between
            2 and itself. If divides without remainder,
             then not prime, so break */
        let i
        for(i = 2; i < candidateValue; i++){
            if(candidateValue % i === 0){
                isPrime = false
                break
            }
        }

        /* If still prime, set the last prime 
            and update count */
        if(isPrime){
            latestPrime = candidateValue
            count = count + 1
        }

        /* Try next number */
        candidateValue = candidateValue + 1
    }
    /* Return the last found prime, since we 
        have generated enough */
    return latestPrime
}

/* Check Solution */
console.log('Result is ' + nthPrime(10001))