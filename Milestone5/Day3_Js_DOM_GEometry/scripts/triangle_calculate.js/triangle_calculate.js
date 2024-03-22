/**
//  * objective: get base hight of a triangle. calculate the area by using the provided formula and then display the area.
//  * step1: get base value of the triangle
//  * step2- added an id in the base inpuit field
//  * step3: use getElementById to access the input field
//  * step4: get value from the input field(value us string now)
//  * step5: convert the value to a numbeer. Use parseFloat
//  * 
// */
console.log("Calculate");
function calculateTriangleArea(){
    console.log("Inside Function!")
    //get triangle base value
    const triangleBase=document.getElementById('triangle-base');
    console.log(triangleBase);
    const triangleBaseText=triangleBase.value;
    const base=parseFloat(triangleBaseText);
    console.log(typeof base);
    // get the triangle height value
    const triangleHeight=document.getElementById('triangle-height');
    const triangleHeightText=triangleHeight.value;
    const height= triangleHeightText;
    console.log(triangleHeight);
    console.log(triangleHeightText);
    console.log(height);
    //calculation triangle area
    const area=0.5*base*height;
    console.log("The area of the triangle is,",area,"cm^2");

    //display triangle area
    const triangleAreaSpan=document.getElementById('triangle-area');
    triangleAreaSpan.innerText=area;
}   