console.log("rect connected");
function calculateRectangleArea(){
    console.log('calculated rect area');
    //get the length of the rectangle
    const rectangleLength=document.getElementById('rectangle-length');
    const lengthText=rectangleLength.value;
    const length=parseFloat(lengthText);
    console.log(rectangleLength); 
    console.log(lengthText);
    console.log(length);
    //get the width of the rectangle
    const rectangleWeight=document.getElementById('rectangle-width');
    const weightText=rectangleWeight.value;
    const weight=parseFloat(weightText);
    console.log(rectangleWeight);
    console.log(weightText);
    console.log(weight);
    
    // calculate rectangle area 
    const area=length*weight;
    console.log('Area of the rectangle:',area,'cm^2');

    //display rectangle area
    const rectangleAreaSpan=document.getElementById('rect-area');
    rectangleAreaSpan.innerText=area;
}