let primeFactors = []

let generatePrimeFactors = (number) => {

  // Qutiient keeps track of result after division
  let quotient = number

  /* If Even, keep dividing by two */
  while(quotient % 2 === 0){
    primeFactors.push(2)
    quotient = quotient / 2
  }

  /* Quotient is odd at this point, so now find odd prime factors */
  let i
  // Look through odd numbers between 3 and quotient
  for(i = 3; i < quotient; i = i + 2){
    // If we can quotient by the odd number without a remainder, divide it
    while(quotient % i === 0){
      primeFactors.push(i)
      quotient = quotient / i
    }
  }
  // If the remaining quotient is a prime number, push to array
  if(quotient !== 1){
    primeFactors.push(quotient)
  }

}

/* Solution Function */
let largestPrimeFactor = (number) => {

  generatePrimeFactors(number)

  // Converts array into series of function arguments fed into Math.max
  return Math.max(...primeFactors)
}


/* Check Solution */
console.log(largestPrimeFactor(600851475143))