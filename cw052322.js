// Your task is to sum the differences between consecutive pairs in the array in descending order.
// Example

// [2, 1, 10]  -->  9

// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

function sumOfDifferences(arr) {
    if(arr[0] > 0){
    arr.sort((a, b) => a + b)
    return (arr[0] - arr[1]) + (arr[1] - arr[2])
  }else{
    arr.sort((a, b) => a - b)
    return (arr[2] - arr[1]) + (arr[1] - arr[0])
  }
    }