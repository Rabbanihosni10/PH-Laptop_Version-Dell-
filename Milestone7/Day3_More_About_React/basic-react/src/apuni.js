function myFunction(a, n){
    const ab = a.length;
    for(let i1 = 0; i1 < ab; i1++){
        if(i1 === n){
            return a[i1];
        }
    }
}
myFunction('abcd', 1);
// console.log(alu);


const tom='avsfss';
const tom2=tom.split('');
let convert='';
let i=0;
const n=3;
tom2.forEach(element => {
    if(i<n){
        convert+=element;
        i++;
    }
    return 0;
});
console.log(convert);
