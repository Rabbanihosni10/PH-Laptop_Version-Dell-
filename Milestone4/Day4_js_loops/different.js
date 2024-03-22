// even --> n%2===0

// odd--> n%2!==0
// odd numbers
for(let j=1; j<20; j+=2){
    console.log(j);
}
console.log();
console.log();
for(let i=0; i<20;i++){
    if (i%2!==0){
        console.log(i);
    }
}
console.log();
console.log();
// give me the list of numbers between 1 to thirty divisible by 5
for(let x=1; x<=30; x++){
    if(x%5===0){
        console.log(x);
    }
}
for(let y=1; y<=30; y++){
    if(y%5===0 || y%3===0){
        console.log(y);
    }
}
console.log();
console.log();
for(let z=1;z<=30;z++){
    if(z%5===0 && z%3===0){
        console.log(z);
    }
}
console.log();
console.log();

//give ne the esum of numbers from 1 to 20 that are divisible by 3
let su=0;
for(let c=0; c<=20; c++){
    if(c%3===0){
        console.log("Statement:",c);
        su+=c;
        console.log("Partial statement:",su);    
    }
}
console.log("Final Statement:",su);