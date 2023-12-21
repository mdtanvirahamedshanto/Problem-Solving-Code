const mixedArr = [
    "shanto",
    "",
    NaN,
    "tanvir"
];

// const trueArray = mixedArr.filter((e)=>{
//     if(e){
//         return true;
//     }else{
//         return false;
//     }
// });

const turearr = mixedArr.filter(Boolean);

// console.log(trueArray);
console.log(turearr);


//Object

const obj = {
    a:"shanto",
    b:"",
    c:NaN,
    d:"tanvir",
};

const truthyObject = (obj)=>{
    for(let i in obj){
        if(!obj[i]){
            delete obj[i];
        }
    }
    return obj;
}

console.log(truthyObject(obj));