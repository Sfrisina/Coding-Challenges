function howMuchWater(water, load, clothes){
    if(clothes > (load * 2)){
      return 'Too much clothes'
    }else if(clothes < load){
      return 'Not enough clothes'
    }else{
      let extraClothes = clothes - load
    for(let i = 1; i <= extraClothes; i++){
        let extraWater = water * .10       
    }
    }    
  }
  
  
  
  
  
  //p - 3 numbers given
  //r - return "too much", "Not enough" or amount of water with 2 decimal places
  //e - see below for examples
  //p - is clothes more than double load? , is clothes less than load? Calculate.