function pentagonCalculation(){
    const pent=calculateAllCommonArea('pentagon-p');
    const base=calculateAllCommonArea('pentagon-b');
    const area=0.5*base*pent;
    console.log("The p of the pentagon is:",pent);
    console.log("The b of the pentagon is:",base);
    console.log("The area of the pentagon is:",area);
    displayAreaCalculation('pentagon-area',area);
}
function calculateAllCommonArea(calculateId){
    const element=document.getElementById(calculateId);
    const elementText=element.value;    
    const vai=parseFloat(elementText);
    return vai;
} 
function displayAreaCalculation(elementId,area){
    const element=document.getElementById(elementId);
    element.innerText=area;
}