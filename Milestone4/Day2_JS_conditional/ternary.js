/**
 * TERNARY --> three parts
 * 1.condition
 * 2.?
 * 3.do something when true : do something when false
 *       "condition <---> ? <---> do something when true:do something when false"
 */


//without using ternary(normal if else)
const age1 = 19;
if (age1>=18){
    console.log("You can Vote!!");
}
else{
    console.log("ghumai thako!");
}
//---------------------------------------------------

//after using ternary(simple ternary)
const age = 12;
age >=18 ? console.log('vote dio') : console.log("ghumai thaiko")




// value of let and var can be changed
// but the value of const cant be changed, Its a fixed value

let price = 500;
const isLeader = false;

if (isLeader===true){
    price =0;
}
else{
    price+=100;
}
console.log(price);

price= isLeader===true ? 0: price+100
console.log(price);


// Optional: Semi advanced ternary


if (isLeader===true){
    if(price>1000){
        price= price/2;
    }
    else{
        price=0;
    }
}
else{
    price+=100;
}

//Feel free to ignore this one

price= isLeader===true ? 
               price>1000 ? price/2 : 
                       0 :price+1000;