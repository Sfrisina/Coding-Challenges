// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"

// Notes:

//     If either input is an empty string, consider it as zero.

//     Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

function sumStr(a,b) {
    if((a === ('')) && (b === (''))){
      return '0'
    }else if((a === ('')) && (b !== (''))){
             return b
    }else if((b === ('')) && (a !== (''))){
             return a
             }else{
      let n1 = parseInt(a, 10)
      let n2 = parseInt(b, 10)
      let num = n1 + n2
      return num.toString()
    }
      }