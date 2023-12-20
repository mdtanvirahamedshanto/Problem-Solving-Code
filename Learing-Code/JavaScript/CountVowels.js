const vowels = ["a","e","i","o","u","A","E","I","O","U"];

function countVowel(sentance){
    let count = 0;
    let letter = Array.from(sentance);
    letter.forEach((value)=>{
        if(vowels.includes(value)){
            count++
        }
    })

    console.log(count);
}

countVowel("I Love Bangladesh");