/* Solution Function */
let largestPrimeFactor = (number) => {

  let largestPrime = 0
  // Quotient keeps track of result after division
  let quotient = number

  /* If Even, keep dividing by two */
  while(quotient % 2 === 0){
      largestPrime = 2
      quotient = quotient / 2
  }

  /* Quotient is odd at this point, so now find odd prime factors */
  let i
  // Look through odd numbers between 3 and quotient
  for(i = 3; i < Math.sqrt(quotient); i = i + 2){
      // If we can quotient by the odd number without a remainder, divide it
      while(quotient % i === 0){
          largestPrime = i
          quotient = quotient / i
      }
  }

  if(quotient != 1){
      largestPrime = quotient
  }


  return largestPrime
}


/* Check Solution */
console.log(largestPrimeFactor(600851475143))