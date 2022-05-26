// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x){
    let arr = x.map(a => Number(a))
    return  arr.reduce((a, b) => a + b)
  }
  
  
  //P - array of number strings and numbers
  //R - return the sum of the array 
  //E - assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
  //P - convert string to number than add up the entire array