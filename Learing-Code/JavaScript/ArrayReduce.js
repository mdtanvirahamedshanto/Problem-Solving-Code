// Array Reduce Syntex...
/*
array.reduce( function(total, currentValue, currentIndex, arr), 
initialValue ) */

var number = [1, 2, 3, 4, 5, 6];
var result = number.reduce((prev, carent) => {
  return prev + carent;
}, 0);

console.log(result);
