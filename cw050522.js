// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"

// Names given are always valid strings.

function areYouPlayingBanjo(name) {
    if(name.charAt(0) === 'r' || name.charAt(0) === "R"){
      return `${name} plays banjo`
    }else{
      return `${name} does not play banjo`
    }
  }

//   Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

function between(a, b) {
    let arr =[]
    for(let i = a; i <= b; i++){
      arr.push(i)
      }
    return arr
  }


