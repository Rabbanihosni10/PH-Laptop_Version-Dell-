/**
 * looping technique
 * 1.for loop
 * 2.while loop
 * 3.do while -->ignore
 * 4.for of --> array loop
 * 5.for in --? object loop
 */
const friends=["elon","bill","mark","waren"];

for(const friend of friends){
    // console.log(friend);
}

// for(let i=0; i<10; i++){
//     console.log(i);
//     console.log(friends[i]);
// }

for(let i=0; i<=friends.length; i++){
    console.log(i);
    console.log(friends[i]);
}

const numbers=[5,23,2323,123,132,24,54,6,76,87]
for(let i=0; i<numbers.length; i++){
    console.log(numbers[i]);
}

let i=0;
while(i<friends.length){
    console.log(friends[i]);
    i++;
}

let n=0;
while(n<numbers.length){
    console.log(numbers[n]);
    n++;
}
