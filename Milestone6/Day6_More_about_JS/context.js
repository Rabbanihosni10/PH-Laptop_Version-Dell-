let a=5;
function add(num1,num2){
    const result=num1+num2+a;
    return result;
}

const sum=add(4,5);
console.log(sum);

// This will show error because a is a globa veriable in the meanwhile num1 and num2 is local veriable 