/* Solution Function */
let smallestMult = (largestDivsor) => {

    let solution
    /* Keeps Track of Potential Solution */
    let potentialSolution = largestDivsor
    /* Boolean to control while loop */
    let unsolved = true

    while(unsolved === true){

        let currentDivsor
        /* Try dividing potential solution by all values from 
            1 to largest divisor. If any of them produce a remainder,
             break out */
        for(currentDivsor = 1; currentDivsor <= largestDivsor; currentDivsor ++){
            if(potentialSolution % currentDivsor !== 0){
                break
            }else{
                /* If we just successfully divided by the largest
                    divisor we need, then we have a solution! */
                if(currentDivsor === largestDivsor){
                    solution = potentialSolution
                    unsolved = false
                }
            }
        }
        
        /* Try next number */
        potentialSolution = potentialSolution + 1
    }
    
    return solution

}
/* Check Solution */
console.log(smallestMult(20))