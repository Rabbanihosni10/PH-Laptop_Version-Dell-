//1. JSON
const student={
    name:'Sakib khan',
    age:32,
    movies:['King Khan','Dhakar Mastan']
};
  
const studentJSON=JSON.stringify(student);
console.log(student);
console.log(studentJSON);

const studentObj=JSON.parse(studentJSON);
console.log(studentObj);


//2.fetch
// fetch('url')
//     .then(res=>res.json())
//     .then(data=>console.log(data))



//keys , values
const keys=Object.keys(student);
const values=Object.values(student);
console.log(keys,values);


//for
const arr=[12,32,34,45,65,57,67,78,89,9,89];
arr.forEach(num=>console.log(num));
arr.map(num=>num*2);
console.log(arr); 


//for of on array like object
//loop on an object using for in



//add or remove from an array
const products=[
    {name:'Laptop', price: 32000,brand:'lenovo',color:'Silver'},
    {name:'Phone', price: 7000,brand:'Iphone',color:'Golden'},
    {name:'watch', price: 3000,brand:'casio',color:'Yellow'},
    {name:'sunglass', price: 300,brand:'ribon',color:'black'},
    {name:'camera', price: 3200,brand:'canon',color:'gray'}
];

const newProduct={name:'webcam',price:700,brand:'logitech',color:'black'};
//copy products array and then add newProduct
const newProducts=[...products,newProduct];
console.log(newProducts);

//create a new array without one specific item
//remove phone means create a new array without the phone
const remaining=newProducts.filter(pr=>pr.name!=='Phone');
console.log(remaining);

"" || 'Hello'