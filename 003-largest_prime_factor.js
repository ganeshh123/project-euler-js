let largestPrimeFactor = (number) => {

  /* Keeps track of Latest Number we divided by */
  let latestDivisor
  /* Keeps track of result after division */
  let quotient = number

  /* If even, keep dividing by 2 */
  while(quotient % 2 === 0){
      latestDivisor = 2
      quotient = quotient / 2
      console.log(2)
  }

  /* Divide by smallest odd number possible
      each time until quotient is 1 */
  let divisor = 3
  while(quotient > 1){
      while(quotient % divisor === 0){
          quotient = quotient / divisor
          latestDivisor = divisor
          console.log(divisor)
      }
      divisor = divisor + 2
  }

  return latestDivisor

}

console.log('Result is ' + largestPrimeFactor(600851475143))