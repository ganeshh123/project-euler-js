let fibNumbers = []

/* Generates Fibonacci Numbers Under a Given Limit */
let generateFibNumbers = (limit) => {

  // Base Case
  let a = 0;
  let b = 1;

  fibNumbers.push(a)
  fibNumbers.push(b)

  // Generate Remaing Fib Numbers
  let i;
  for(i = 2; i < limit; i ++){

    let c = a + b
    // Stopping Condition -> when we reach our limit
    if(c > limit){
      return;
    }
    fibNumbers.push(c)

    a = b
    b = c
  }
}

/* Solution Function */
let fiboEvenSum = (limit) => {

  generateFibNumbers(limit)

  // Remove Odd Numbers
  let evenFibNumbers = fibNumbers.filter((number) => {
    return number % 2 === 0
  })

  // Sum Even Fib Numbers
  let sum = 0;
  evenFibNumbers.forEach((number) => {
    sum = sum + number
  })
   
  return sum
}

console.log(fiboEvenSum(1000))