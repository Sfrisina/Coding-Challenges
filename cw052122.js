// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
// Examples

// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi!!"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

// Note

// Please don't post issue about difficulty or duplicate. 

function remove (string) {
    let last = (string.charAt(string.length -1))
  if(last === "!"){
  let str = string.substring(0, string.length - 1)
  return str
  }
    
  }