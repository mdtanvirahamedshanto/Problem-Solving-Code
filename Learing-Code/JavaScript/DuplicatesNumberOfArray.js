const number = [1,2,3,4,2,5,6,5,7,8]

let duplicate = number.filter((value, index, array)=>{
    return array.indexOf(value) !== index ;
})

console.log(duplicate);