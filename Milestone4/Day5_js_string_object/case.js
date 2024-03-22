const school='Raj UK Uttara Model School!';

console.log(school);


//Case sensitive
//uppercase: ABCSDE
//lowercase: abcsdfew
const subject= 'Chemistry';
const book= 'chemistry';
if (subject===book){
    console.log("I am reading book!");
}
else{
    console.log("I am gonna fail this exam!");
}
console.log(subject)
console.log(subject.toLowerCase());
console.log(subject.toUpperCase());


if(subject.toLowerCase()===book.toLowerCase()){
    console.log("I am ready!");
}
else{
    console.log("I am not ready!");
}

//.trim(), .trimEnd() , .trimStart()
const drink="Water";
const liquid="    Water   ";
if(drink===liquid.trim()){
    console.log("Water is life");
}
else{
    console.log("Its salty");
}

// parseFloat
// parseInt
// typeof
// toLowerCase
// toString