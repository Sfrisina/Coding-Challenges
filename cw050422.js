// As you plunge out of the slide into the water, you see a shark hovering in the darkness under the pontoon... Crap!

// You need to work out if the shark will get to you before you can get to the pontoon. To make it easier... as you do the mental calculations in the water you either freeze when you realise you are dead, or swim when you realise you can make it!

// You are given 5 variables;

//     sharkDistance = distance from the shark to the pontoon. The shark will eat you if it reaches you before you escape to the pontoon.

//     sharkSpeed = how fast it can move in metres/second.

//     pontoonDistance = how far you need to swim to safety in metres.

//     youSpeed = how fast you can swim in metres/second.

//     dolphin = a boolean, if true, you can half the swimming speed of the shark as the dolphin will attack it.

//     The pontoon, you, and the shark are all aligned in one dimension.

// If you make it, return "Alive!", if not, return "Shark Bait!".
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    let you = pontoonDistance / youSpeed
    let shark = sharkDistance / sharkSpeed
    if(dolphin === true){
      you = you / 2
    }
      if(you < shark){
        return 'Alive!'
      }else{
        return 'Shark Bait!'
      }
    }

    //another
//     Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

function solution(nums){
    let empty = []
    if(nums === null){
      return empty
    }else{
  return nums.sort((a, b) => a - b)
  }
    }