function elipseCalculation(){
    const a=calculateAllCommonArea('elipse-a');
    const b=calculateAllCommonArea('elipse-b');
    const pi=3.1416;
    const area = pi*a*b;
    displayAreaCalculation('elipse-area',area);
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