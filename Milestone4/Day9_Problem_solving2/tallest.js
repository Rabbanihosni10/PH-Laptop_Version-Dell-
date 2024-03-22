const heights=[65,66,62,82,72,74,12];
let height=0;
for(const num of heights){
    if(height<num){
        height=num
    }
}
console.log(height);


function getMax(numbers){
    let max= 0;
    for(const num of numbers){
        if(num>max){
            max=num;
        }
    }
    return max;
    // console.log(numbers);
}

const max=getMax(heights);
console.log("Max value is",max);