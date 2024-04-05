//falsy
//'', 0, false, null, undefined
//truthy
//'almas',5,true,{},[]


//check truthy
let myVar=5;
if(myVar){
    myVar*=100;
}
else{
    myVar=0;
}

console.log(myVar);

//check falsy
let myMoney=50;
//you can check negetive or falsy anything
// if(!myMoney){

// }

const money=80;
let food;

if(money>80){
    food='Biryani';
}
else{
    food='cha-biscuit';
}

//ternary
let food1= money>100?'Biryani':'cha-biscuit';
console.log(food1);
let drink=(money>100 && myVar>100)?'coke':'filter water';
console.log(drink);


//
const num1=52;
console.log(num1);
const numStr=num1+'';
console.log(numStr);

//string to number
const input ='560';
//process 1
const inputNum2=parseInt(input);
//process 2
const inputNum=+input;
console.log(inputNum);
console.log(inputNum2);

//
let isActive=true;
const isActive1=false;
const showUser=()=>console.log('Display USer');
const hideUser=()=>console.log('Hide User');
isActive?showUser():hideUser();
isActive1?showUser():hideUser();
isActive && showUser();

//use '&&' if the left side is true then right side will be executed
//use '||' if left side is false then the right side will be executed
isActive1 || hideUser();

//toggle boolean
isActive= !isActive;