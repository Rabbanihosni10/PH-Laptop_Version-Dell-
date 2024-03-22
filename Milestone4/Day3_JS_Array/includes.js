const friends=["alam","rafiq","taw"];
console.log(friends.includes("alam"));
console.log(friends.includes("Mahi"));

if(friends.includes("asfaq")){
    console.log("Party");
}
else{
    console.log("No food, we are fasting!");
}

//find the index value
console.log(friends.indexOf("alam"));
console.log(friends.indexOf("tomato"));


//check this is array or not
const nums=[];

const food="ros o gol l a";
console.log(Array.isArray(friends));
console.log(Array.isArray(nums));
console.log(Array.isArray(food));



// methods of array
/**
 * 1.includes()     --find if the value is in the array
 * 2.indexOf()      --find the index of the  element
 * 3.Array.isArray()    --find if the var is array or not
 * 4.push()             --add value at the last of the array
 * 5.pop()              --remove value from the last of the array
 * 6.shift()            --remove value from the 1st of the array
 * 7.unshift()         --add value at the first of the array
 * 8.join()             -- join elements of the array
 * 9.concat()           --add two array into one 
 * 10.slice()           --slice is used to cut some parts of an array     pizza.slice(2,4)
  * 11.splice()         --
  * 
  * 
  *
github array tasks.
*/