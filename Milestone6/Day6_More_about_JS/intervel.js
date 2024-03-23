//setTimeout()
//setIntervel()
// clearTimeout()
// clearInterval()
console.log(1);
console.log(2);
// console.log(3);
setTimeout(()=>{
    console.log(3);
})
setTimeout(()=>{
    console.log(3);
},4000)
console.log(4);
console.log(5);
console.log(6);
console.log(6);

let num=0;
const clockId=setInterval(()=>{               //its almost like a loop will work untill i stop it 
    num++;
    console.log('I am You!');
    if(num>6){
        clearInterval(clockId);    //it will stop the setIntervel()
    }
    else{
        console.log(clockId,num);
    }
},2000)