// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function find_average(array) {
    if (array.length === 0){
      return 0
    }else{
    let sum = array.reduce((c, a) => c + a)
     return (sum / array.length)
  }
  }

//   There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

//     number of pillars (≥ 1);
//     distance between pillars (10 - 30 meters);
//     width of the pillar (10 - 50 centimeters).

// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

function pillars(num_pill, dist, width) {
    if(num_pill === 1){
      return 0
    }else if(num_pill === 2){
      return dist * 100
    }else{
      return (dist * 100) * (num_pill - 1) + (width * (num_pill - 2))
    }
  }