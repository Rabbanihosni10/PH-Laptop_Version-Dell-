const numbers=[45,65,23,98,19];

for(let i=0; i<numbers.length; i++){
    const number=numbers[i];
    console.log(number);
}
for(const number of numbers){
    console.log(number);
}
const products1=[
    {id:1,name: 'walton phone',price:19000},
    {id:2,name: 'walton laptop',price:190000},
    {id:3,name: 'iphone phone',price:1900020},
    {id:4,name: 'iphone laptop',price:19000200},
    {id:5,name: 'samsung phone',price:1900040},
    {id:6,name: 'samsung laptop',price:190004000}

function  matchProducts(products1,search){
    for(const num of products1){
        console.log(num.name.includes(search));
    }
}