let powerDigitSum = (exponent) => {

    let sum = 0

    /* Array of the digits of our large number */
    let digits = []
    digits[0] = 1

    /* For Loop to multiply by 2 "exponent" times */
    let i
    for(i = 0; i < exponent; i++){

        /* Carry to next number after multiplication */
        let carry = 0
        
        /* For Loop to update all the necessary digits for 
            this particular multiplication */
        let j
        let count = digits.length + 1
        for(j = 0; j < count; j++){

            /* Multiply the digit by 2 */
            let currentDigit = digits[j] || 0
            currentDigit = (currentDigit * 2) + carry

            /* We can only store 1 digit in each array element so we need
             to carry over to the next digit */
            if(currentDigit > 9){
                currentDigit = currentDigit - 10
                carry = 1
            }else{
                carry = 0
            }

            /* Put digit into array */
            digits[j] = currentDigit
        }

    }

    /* Go through array and sum up all the digits */
    digits.forEach((digit) => {
        sum = sum + digit
    })

    return sum
}

/* Check Solution */
console.log('Result is ' + powerDigitSum(1000))