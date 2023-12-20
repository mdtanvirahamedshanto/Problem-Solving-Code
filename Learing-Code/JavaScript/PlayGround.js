const user = {
    name :"Shanto",
    age: 21,
    education:{
        degre: "HSC",
        school: {
            hsc: "dhulasar",
            ds:{
                // d:"clg",
        }
    }
}
}

const {education:{school:{ds:{d} = {}}}} = user;

// const data = user?.education?.school?.ds?.d;
console.log(d);


