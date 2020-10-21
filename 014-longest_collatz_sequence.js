/* Solution Function */
let longestCollatzSequence = (limit) => {

    /* Stores the length of the longest sequence found so far,
        and it's starting value */
    let longestSequence = 1
    let longestValue = 1

    /* Go through each possible starting value from 2 to the limit */
    let startValue
    for(startValue = 2; startValue < limit; startValue ++){

        /* Keep track of the number of terms for this start value */
        let numberOfTerms = 1
        let currentTerm = startValue

        /* Build the chain until we reach 1, incrementing the number of terms */
        while(currentTerm != 1){
            if(currentTerm % 2 === 0){
                currentTerm = currentTerm / 2
            }else{
                currentTerm = ((3 * currentTerm) + 1)
            }
            numberOfTerms = numberOfTerms + 1
        }

        /* If chain is longer than longest found so far, update longest */
        if(numberOfTerms > longestSequence){
            console.log('Number of terms for ' + startValue + ' is ' + numberOfTerms)
            longestSequence = numberOfTerms
            longestValue = startValue
        }

    }

    /* Return the starting value of the longest chain */
    return longestValue

}

/* Check Solution */
console.log('Result is ' + longestCollatzSequence(1000000))