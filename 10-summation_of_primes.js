/* Slower function (uses less memory) */
let primeSummationSlow = (n) => {

    let sum = 0
    let candidateValue = 0

    if(n > 2){
        sum = sum + 2
        console.log('Added prime ' + 2 + ', sum is now ' + sum)
        candidateValue = 3
    }

    while(candidateValue < n){

        let isPrime = true

        let divisor
        for(divisor = 3; divisor < candidateValue; divisor ++){
            if(candidateValue % divisor === 0){
                isPrime = false
            }
        }

        if(isPrime){
            sum = sum + candidateValue
            console.log('Added prime ' + candidateValue + ', sum is now ' + sum)
        }

        candidateValue = candidateValue + 2        
    }


    return sum
}

/* Faster sieve function (uses more memory) */
/* Solution Function */
let primeSummation = (n) => {

    let sum = 0

    /* Array of prime values to sum. Index is the same as value */
    let arrayToSum = [0, 0]
    let i
    /* Assume that all values from 2 are prime */
    for(i = 2; i < n; i ++){
        arrayToSum.push(i)
    }

    /* Go through each index between 2 and n */
    for(i = 2; i < n; i ++){

        /* If the number hasn't already been removed (set to 0) */
        if(arrayToSum[i] !== 0){
            let j
            /* Go through array and remove all its multiples (set to 0) */
            for(j = 2*i; j < n; j += i){
                if(arrayToSum[j] % i === 0){
                    arrayToSum[j] = 0
                }
            }
        }
    }

    /* Add remaining values from array */
    for(i = 0; i < arrayToSum.length; i ++){
        if(arrayToSum[i] != 0){
            console.log('Added prime ' + arrayToSum[i] + ', sum is now ' + sum)
        }
        sum = sum + arrayToSum[i]
    }

    return sum

}

/* Check Solution */
console.log('Result is ' + primeSummation(2000000))