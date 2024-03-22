const disha= 56;
const salman= 95;

//using conditional
if(disha>salman){
    console.log("Disha will take the cake!");
}
else{
    console.log("Salman will take the cake!");
}
//Using function
function getMax(num1,num2){
    if (num1>num2){
        return num1;
    }
    else{
        return num2;
    }
}
const max=getMax(disha,salman);
console.log("The max between these 2 numbers is",max);

const max1=getMax(54,97);
const max2=getMax(90,123);
const ultimateMax=getMax(max1,max2)
console.log("The max between these 2 numbers is",ultimateMax);
