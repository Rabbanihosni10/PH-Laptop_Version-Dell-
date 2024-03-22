const jim=54;
const tim=90;
const kim=12;

if(jim>tim && jim>kim){
    console.log("Jim is the ultimate boss!");
}
else if(tim>jim && tim>kim){
    console.log("Tim is the boss!");
}
else{
    console.log("kim is the kardashian boss!");
}

function maxOfThree(num1,num2,num3){
    if(num1>num2 && num1>num3){
        return num1
    }
    else if(num2>num1 && num2>num3){
        return num2;
    }
    else{
        return num3;
    }
}

const max=Math.max(12,23,12,32);
console.log("Max of these numbers is:",max);

