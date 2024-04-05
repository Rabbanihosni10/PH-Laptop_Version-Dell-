//array destructuring
const numbers=[42,65];
const x=numbers[0];
const y=numbers[1];
console.log(x,y);
// const [m,n]=[42,65];
const [m,n]=numbers;
console.log(m,n);


function boxify(num1,num2){
    const nums=[num1,num2];
    return nums;
}
// const [first,second]=[90,34];
const [first,second]=boxify(90,32);
console.log(boxify(90,32));
console.log(first,second);


const student={
    name:'Sakib khan',
    age:32,
    movies:['King Khan','Dhakar Mastan']
};
const [fstMovie,sndMovie]=student.movies;
console.log(fstMovie,sndMovie);

//object destructuring

const {name,age}={name:'alu',age:14};
const {id,name1,age1}={id:12,name:'alu',salary:3400,age:14};
console.log(name,age);

const employee ={
    ide: 'VS Code',
    degignation: 'developer',
    mechine: 'mac',
    languages: ['html','css','js'],
    spefication: {
        height: 66,
        weight: 67,
        address: 'kumarkhali',
        drink: 'water',
        watch:{
            color:'black',
            price:500,
            brand:'garmin'
        }
    }
}

const {machine,ide}=employee;
const {brand}=employee?.spefication?.watch;
//optional chaining '?'