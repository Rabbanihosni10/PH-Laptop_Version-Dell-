// how to reverse the elements of the array
const numbers= [1,2,3,4,5,6,7];
console.log(numbers);
// const reversed=numbers.reverse();
// console.log(reversed);
const rev_numbers=[];
const rev_numbers1=[];
for(let i of numbers){
    console.log(i);
    rev_numbers.push(i);
    rev_numbers1.unshift(i);
    // rev_numbers1.shift(i);
}
console.log(rev_numbers);
console.log(rev_numbers1);
const reversed_numbers=[];
for(let i=0;i<numbers.length;i++){
    const num=numbers[i];
    reversed_numbers.unshift(num);   
}
console.log(reversed_numbers);
const rev_nu=[];
// decremental for loop
for(let i=numbers.length-1; i>=0; i--){
    const num=numbers[i];
    console.log(num);
    rev_nu.push(num);
}
console.log(rev_nu);

