// নিচের sentance  এ কতবার shanto ব্যাবহার করা হয়েছে ? প্রথমবার কত নাম্বার পজিশন এ পাওয়া গেছে ?

const sentence = "Lorem ipsum dolor sit shanto consectetur adipisicing elit. Sunt molestiae ut reiciendis officiis fugit facilis maxime voluptatum possimus beatae doloribus velit nihil, recusandae aspernatur Shanto iste rem. Fugiat magnam saepe cum doloribus non, est earum nostrum illo vero delectus reprehenderit shantos modi, beatae libero iusto, porro repudiandae autem optio ab!"

const matches = sentence.match(/shanto/gi);
const occurences = matches? matches.length : 0;


let position = sentence.search(/shanto/i);
position = position >= 0 ? position : "Not Found"

console.log(position);
console.log(occurences);