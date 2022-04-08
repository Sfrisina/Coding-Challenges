The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
Task

Given a year, return the century it is in.
Examples

1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20

const century = year => Math.ceil(year/100)

Given a number n, return the number of positive odd numbers below n, EASY!
Examples (Input -> Output)

* 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
* 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])

Expect large Inputs!

function oddCount(n){
    return Math.floor(n/2);
  }