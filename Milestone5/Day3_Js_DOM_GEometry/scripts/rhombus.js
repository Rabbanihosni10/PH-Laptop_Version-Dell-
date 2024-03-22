function rhombusCalculation(){
    const d1Map=calculateAllCommonArea('rhombus-d1');
    const d2Map=calculateAllCommonArea('rhombus-d2');
    const area=0.5*d1Map*d2Map;
    // return area
    console.log("The d1 of the rhombus is:",d1Map);
    console.log("The d2 of the rhombus is:",d2Map);
    console.log("The area of the rhombus is:",area);
    displayAreaCalculation('rhombus-Area',area);
}
function calculateAllCommonArea(calculateId){
    const element=document.getElementById(calculateId);
    const elementText=element.value;    
    const vai=parseFloat(elementText);
    // console.log(vai)
    return vai;
} 
function displayAreaCalculation(elementId,area){
    const element=document.getElementById(elementId);
    element.innerText=area;
}