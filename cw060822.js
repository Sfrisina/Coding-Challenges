// Simple, given a string of words, return the length of the shortest word(s).

function findShort(s){
    let arr = s.split(' ')
     let newArr =  arr.sort((a, b) => 
      a.length - b.length)
     return newArr[0].length
  }