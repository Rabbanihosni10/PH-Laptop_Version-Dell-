const products=[
    {name:'Laptop', price: 32000,brand:'lenovo',color:'Silver'},
    {name:'Phone', price: 7000,brand:'Iphone',color:'Golden'},
    {name:'watch', price: 3000,brand:'casio',color:'Yellow'},
    {name:'sunglass', price: 300,brand:'ribon',color:'black'},
    {name:'camera', price: 3200,brand:'canon',color:'gray'}
];
//Using map method
const brands= products.map(product=>product.brand);
console.log(brands);
const prices=products.map(product=>product.price);
console.log(prices);

products.forEach(product=>console.log(product));
products.forEach(product=>console.log(product.color));

//using filter method
const cheap=products.filter(product=>product.price<=5000);
console.log(cheap);

const specificName=products.filter(pd=>pd.name.includes('n'));
console.log(specificName);


//Using find method
const special =products.find(product=>product.name.includes('n'));
console.log(special);
