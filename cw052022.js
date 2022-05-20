// Write a function that will check if two given characters are the same case.

//     If either of the characters is not a letter, return -1
//     If both characters are the same case, return 1
//     If both characters are letters, but not the same case, return 0

// Examples

// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1


function sameCase(a, b){
    if(a.toUpperCase() === a.toLowerCase()){
     return -1
   }else if(b.toUpperCase() === b.toLowerCase()){
       return -1
   }else if ((a.toUpperCase() === a) && (b.toUpperCase() === b)){
     return  1
     }else if((a.toLowerCase() === a) && (b.toLowerCase() === b)){
       return 1
     }else if((a.toUpperCase() === a) && (b.toLowerCase() === b)){
       return 0
     }else if ((a.toLowerCase() === a) && (b.toUpperCase() === b)) {
       return 0
     }else{
       return -1
     }
 }

//  Write a method, that will get an integer array as parameter and will process every number from this array.

 // Return a new array with processing every number of the input-array like this:
 
 // If the number has an integer square root, take this, otherwise square the number.
 // Example
 
 // [4,3,9,7,2,1] -> [2,9,3,49,4,1]
 
 // Notes
 
 // The input array will always contain only positive numbers, and will never be empty or null.
 
 
 function squareOrSquareRoot(array) {
     const map1 = []
     array.map(element => {
       if(Number.isInteger(Math.sqrt(element))){
          map1.push(Math.sqrt(element))
          }else{
            map1.push(element * element )
          }     
     })
   return map1
   }
   
   //P- take in array of intergers
   //R- return array of square root or squared
   //E- if element is squareable(4), return 2. else - square the number
   //P- is the numbers square root is an interger return to array, or square the number and add to array