//option1:  directly set on the html element  ( not Always recomended)
//<button onclick="document.body.style.backgroundColor='yellow'">Make Yellow</button>
console.log("This is seperate js file!");
//option 2 : add onclick function  (Always recomended)
//<button onclick="makeRed()">Make Red</button>
function makeYellow(){
    document.body.style.backgroundColor='yellow';
}

//option3(not Always recomended)

const makeOrangeBtn=document.getElementById('make-orange');
console.log(makeOrangeBtn);
makeOrangeBtn.onclick=makeBlue1;

function makeBlue1(){
    document.body.style.backgroundColor='orange';
}
// const purpleButton=document.getElementById('make-purple');
//         purpleButton.onclick=function makePurple(){
//             document.body.style.backgroundColor='purple';    
//         }
//option4(another)
const makeGreen=document.getElementById('make-green');
makeGreen.addEventListener('click',function makeGreen1(){
    document.body.style.backgroundColor='green';
})
