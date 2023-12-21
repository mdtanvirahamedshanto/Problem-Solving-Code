// কিভাবে সবথেকে বড়ো string খুঁজে বের করবেন এবং তার index  নাম্বার বের করবেন ? 

function longestString(names){
    let longestWord = ' ';
    for(name of names){
        if(name.length > longestWord.length){
            longestWord = name;
        }
    }
    return [longestWord , names.indexOf(longestWord)];
}

console.log(longestString(["shanto","ahamed","tanvir"]));