/* Checks if a given String is a Palindrome */
let isPalindrome = (string) => {

    let backwardString = string.split('').reverse().join('')

    if(string === backwardString){
        return true
    }

    return false
}

/* Solution Function */
let largestPalindromeProduct = (numberOfdigits) => {

    /* Generates Array of Numbers Available to Multiply */
    let arrayOfNumbers = []
    let current = 0
    while(!(current.toString().length > numberOfdigits)){
        if(current.toString().length === numberOfdigits){
            arrayOfNumbers.push(current)
        }
        current = current + 1
    }

    let largestProduct = 0
    let i
    let j
    /* Iterate through Array and Multiply all Numbers with each other */
    for(i = 0; i < arrayOfNumbers.length; i ++){
        for(j = i; j < arrayOfNumbers.length; j ++){
            let product = arrayOfNumbers[i] * arrayOfNumbers[j]
            // If product is a palindrome and larger than the largest
            // product discovered so far, update it
            if(isPalindrome(product.toString()) && product > largestProduct){
                largestProduct = product
            }
        }
    }

    return largestProduct

}


/* Check Solution */
console.log(largestPalindromeProduct(3))
