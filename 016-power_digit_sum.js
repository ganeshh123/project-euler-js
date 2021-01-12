let powerDigitSum = (exponent) => {

    let numberStore = []
    numberStore[0] = 1 //2 ^ 0
    let i
    let order = 0

    for(i = 0; i < exponent; i ++){

        let carry = 0
        let j

        for(j = 0; j <= order; j++){

            let product = 2 * number[j] + carry  // Multiply

            number[j] = product % 10 // One digit numbers only in array
            carry = product / 10

        }
    }

}

/* Check Solution */
console.log('Result is ' + powerDigitSum(15))