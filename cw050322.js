
// Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.

// A few cases:


// (-12, 2, -6)  ->  true
// (-12, 2, -5)  ->  false

// (45, 1, 6)    ->  false
// (45, 5, 15)   ->  true

// (4, 1, 4)     ->  true
// (15, -5, 3)   ->  true

function isDivideBy(number, a, b) {
    if(number % a === 0 && number % b === 0){
      return true
    }else{
      return false
    }
  }

  //next
  
//   Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

//   For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
  
//   Note: The function accepts an integer and returns an integer

  function squareDigits(num){
    let arr = num.toString().split('')
     let newArr = arr.map(x => Math.pow(x, 2))
      return Number(newArr.join(''))
    }
