//Sometimes array may have some duplicate value
//we have to remove those values and add the new ones
const biryaniKhor= ["Abul", "babul", "cabul", "dabul","cabul","kabul", "kabul", "babul","Abul"];
const numbers=[1,5,21,12,12,21,43,5,5,6,6,7];
function noDup(arr){
    const unique=[];
    for( const item of arr){
        if(unique.includes(item)===false){
            unique.push(item);
        }
    }
    return unique;
}
const unique_val= noDup(biryaniKhor);
console.log(unique_val);
const unique_val1=noDup(numbers);
console.log(unique_val1);

