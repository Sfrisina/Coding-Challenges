// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

function otherAngle(a, b) {
    return Math.abs((a + b) - 180)
  }
  
  //P - 2 numbers - interior angles of triangle
  //R - the third angle of the triangle
  //E - (30, 60), 90);
  //P - 3 interior angles should add up to 180.  add the 2 numbers given and subtract from 180