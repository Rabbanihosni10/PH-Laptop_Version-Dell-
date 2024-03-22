for(let i=0; i<15; i++){
    console.log(i);
    if (i>10){
        break;
    }
}
for(let j=0; j<150;j++){
    console.log(j);
    if(j>=5){
        break;
    }
}
console.log("Horraysh!!");



let su=54;
while(su>25){
    console.log(su);
    su--;
    if(su<50){
        break;
    }
}



//continue -->skip this one
//break --> I am done with this. close the loop
//pass -->



for (let k=1; k<10;k++){
    if(k%2===1){
        continue;
    }
    console.log(k)
}



let l=0;
while(l<10){
    if(l%2===1){
        continue;
    }
    console.log(l);
    l++;
}