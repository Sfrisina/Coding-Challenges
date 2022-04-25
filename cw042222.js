// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
     let vowelsCount = 0
     for( let letter of str){
       if (vowels.includes(letter)){
         vowelsCount++;
       }
     }
    
     
     return vowelsCount;
   }

//    Complete the function which converts a binary number (given as a string) to a decimal number.

function binToDec(bin){
    return  parseInt(bin, 2)
  }

//   Complete the solution so that it reverses all of the words within the string passed in. 

function reverseWords(str){
    return str.split(' ').reverse().join(' ')
  }
