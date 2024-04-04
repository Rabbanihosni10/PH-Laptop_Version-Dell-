
const numbers=[132,24,35,87,12];

const student={
    name:'Sakib khan',
    age:32,
    movies:['King Khan','Dhakar Mastan']
};

//1. Template String
const about=`My name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]}`;
console.log(about);

//2. Arrow function 
const getFiftyFive=()=>55;

const addSixtyFive= num => num+65;
const isEven=x=> x%2==0;
const addThree=(x,y,z) => x+y+z;
const doMath=(num1,num2)=>{
    const sum=num1+num2;
    return sum;
}


//spread operator

const newNumbers=[...numbers];
numbers.push(99);
numbers.push(99);
numbers.push(99);
console.log(newNumbers);
console.log(numbers)

//create a new array from an older array and add an element
const currentNumbers=[...numbers,55];

console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);
console.log("==============================================");
console.log("==============================================");
console.log("==============================================");
console.log("==============================================");
console.log("==============================================");
// spread function chatGPT
//Concatinate arrays into one array ==>
const arr1=[1,2,3];
const arr2=[4,5,6];
const margedArray=[...arr1,...arr2];
console.log(margedArray);

//copying an array
const new_arr1=[...arr1];
console.log(new_arr1);

//Adding Elements to array
const noya_arr1=[...new_arr1,55,21];
console.log(noya_arr1);

//passing elements as perameter into an function
//converting array like objects to array

//copying objects
const obj1P={name:'John',age:36};
const copy_obj1={...obj1P};
console.log(copy_obj1);
//adding properties values
//merge obj
//Partitioning
const { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 };
console.log(a);
console.log(b);
console.log(rest);


//Spliting stings
const stri='Hello';
const stri_arr=[...stri];
console.log(stri_arr);

//Concatenating Stings
const stru='World';
const mergedStr=[...stri,...stru].join('');
console.log(mergedStr);

