/* Solution Function */
let smallestMult = (n) => {

    // Current value we are checking
    let current = n - 1 
    // Keeps track of whether we have solved or not
    let unsolved = true

    while(unsolved){
        // Go to Next Value
        current = current + 1
        
        // Try dividing by all numbers from 1 to n
        let i
        for(i = 1; i <= n ; i ++){
            // If a number divides with a remainder, break out. No
            // need to check the rest
            if(current % i != 0){
                break
            }
            //If on the last multiple, and previous check has passed
            // we have a solution
            if(i === n){
                unsolved = false
            }
        }
    }
    
    return current
}

/* Check Solution */
console.log(smallestMult(20))