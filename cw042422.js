// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
// Example:

// n= 5, m=5: 25
// n=-5, m=5:  0

function paperwork(n, m) {
    if(n < 0 || m < 0){
      return 0
    }else{
      return n * m
    }
  }

//   Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.
// Example

// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
    let pos = 0
    let neg = 0
    let newArr =[]
      for(let i = 0; i < input.length; i++){
        if(input[i] > 0){
          pos = pos + 1
        }else{
         neg += input[i] 
        }
       
      }
     newArr.push(neg)
     newArr.unshift(pos)
    return newArr
  }
