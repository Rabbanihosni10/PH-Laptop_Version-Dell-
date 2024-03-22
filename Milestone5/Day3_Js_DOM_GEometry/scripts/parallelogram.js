console.log("Parallelogram is clicked!")
function areaParallelogram(){
    const paraBase=document.getElementById('para-base');
    const paraLength=document.getElementById('para-height');
    const base=paraBase.value;
    const height=paraLength.value;
    //calculate the area
    const area=base*height;
    console.log("The area of the parallelogram is:",area);
    //display the area
    const paraSpan=document.getElementById('para-area-span');
    paraSpan.innerText=area;
}