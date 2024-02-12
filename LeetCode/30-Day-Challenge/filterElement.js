var filter = (arr, fn) => {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) filteredArr.push(arr[i]);
  }
  return filteredArr;
};

console.log(filter([12, 23], n > 10));
