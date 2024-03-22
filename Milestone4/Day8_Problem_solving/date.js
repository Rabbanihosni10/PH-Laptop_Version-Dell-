const today=new Date();
const date= new Date("2062-10-19");
console.log(date);
console.log(date.getMonth());
console.log(date.getDay());

const specificDate=new Date(2091, 0 , 26);
console.log(specificDate);
specificDate.setMonth(10);
console.log(specificDate);
console.log(specificDate.toLocaleString('en-GB'));


//In US- month-date-year
//In GB- date-month-year


//date to secound convert 
//Unix epoc

//day-light-saving
//moment.js

//today we learn--
//new Date()
//new Date(" ")
//getDate()
//getMonth()
//getDay()
//setMonth()
//toLocaleString()