// input = (['a','b','c','d'], 'c')
// output: 2 or Not Found

function linearSearch(arr, val){
    let Length = arr.length;
    for(let i = 0; i < Length; i++){
        if(arr[i] === val){
            return i;
        }
    }
    return "Not Found!";
}
console.log(linearSearch(['a','b','c','d'], 'c'));