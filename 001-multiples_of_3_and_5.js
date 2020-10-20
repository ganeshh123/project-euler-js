let multiplesOf3and5 = (number) => {

    let sum = 0;
    let i;
  
    // Look through each number from 0 to number taken in
    for (i = 0; i < number; i ++){
  
      // If either multiple of 3 or 5, add to sum
      if (i % 3 === 0 || i % 5 === 0){
        sum = sum += i;
      }
    }
  
    // Return Sum
    return sum
  
}

console.log(multiplesOf3and5(1000))