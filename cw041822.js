// Issue

// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before you receive any more complaints. Each pipe should be connecting, since the levels ascend, you can assume every number in the sequence after the first index will be greater than the previous and that there will be no duplicates.
// Task

// Given the a list of numbers, return the list so that the values increment by 1 for each index up to the maximum value.
// Example

// Input: 1,3,5,6,7,8

// Output: 1,2,3,4,5,6,7,8

function pipeFix(numbers){
    let firstNumber = numbers[0]
      let lastNumber = numbers[numbers.length -1]
      let result =[]
      for(i = firstNumber; i <= lastNumber; i++){
        result.push(i)
      }
      return result
    }

//     Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
    let result = weight / (height * height)
     if(result <= 18.5){
       return 'Underweight'
     }else if(result <= 25.0){
         return 'Normal'
       }else if(result <= 30.0){
         return 'Overweight'
       }else{
         return 'Obese'
       }
     }
  
