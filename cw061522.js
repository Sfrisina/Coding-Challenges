// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

function findNextSquare(sq) {
    let num = Math.sqrt(sq)
    if(num % 1 != 0){
      return -1
    }else{
    num = num + 1
     return Math.pow(num, 2)
   }
     }
   
   
   //P- a non-negative number
   //R- the next number with a perfect square root
   //E-Test.assertEquals(findNextSquare(121), 144,
   //P- find the square root of the arguement given, if it squares perfectly, add 1 and square the number, else return -1