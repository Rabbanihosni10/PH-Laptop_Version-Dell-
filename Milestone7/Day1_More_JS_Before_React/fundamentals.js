//1.how to declare a variavle using let and const
const fatherName='Arnold';
let season='rainy';
season='summer';

//2. 6 basic conditions (>,<,===,!==,<=,>=)
//Multiple conditions: (&&(and) , ||(or))

if(fatherName==='Arnold' || season==='rainy'){

}
else if(fatherName==='Arnold'){

}
else{

}

//3. Array
//index 
//length (.length)
//push
const numbers=[132,24,35,87,12];
numbers[0]=56;


//4. loop
//for loop
//while loop
for(let i=0;i<numbers.length;i++){
    const number=numbers[i];
    console.log(number);
}

//5.Function
//simple
function multiply(num1,num2){
    const result=num1*num2;
    return result;
}
const output=multiply(12,12);
//arrow



//6.Object
//3 ways to access property by name
const student={
    name:'Sakib khan',
    age:32,
    movies:['King Khan','Dhakar Mastan']
};  
const myVariable='age';
console.log(student.age);   //direct by property
console.log(student[age]);  //access via property name string
console.log(student[myVariable])  //access via property name in a variable