// function play(){
//     //step1- hide the home screen, to hide the screen add the class hidden to the home section 
//     const homeSection=document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList);
//     //show the playground
//     const playgroundSection=document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
//     // console.log(playgroundSection.classList);
// }
function handleKeyboardButtonPress(event){
    const playerPressed=event.key;

    //key player is expected to press
    const currentAlphabetElement= document.getElementById('current-alphabet');
    const currentAlphabet=currentAlphabetElement.innerText;
    const expectedAlphabet=currentAlphabet.toLowerCase();

    //check right or wrong key pressed
    if(playerPressed===expectedAlphabet){
        console.log("You got a point!");
        console.log('You have pressed correctly!',expectedAlphabet);
        //update score:
        //step1: get the current score
        const currentScoreElement=document.getElementById('current-score');
        const currentScoreText=currentScoreElement.innerText;
        const currentScore=parseInt(currentScoreText);
        console.log(currentScoreText);
        //step2: increase the current score by 1
        const newScore=currentScore+1;
        //step3: show the updated score
        currentScoreElement.innerText=newScore;

        //start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log("Dhuro, right key press koren!");
        //step1: get the current life number
        const currentLifeElement=document.getElementById('current-life');
        const currentLifeText=currentLifeElement.innerText;
        const currentLife=parseInt(currentLifeText);
        //step2: reduce the life count by -1
        const newLife=currentLife-1;
        //step3: display the updated life count
        currentLifeElement.innerText=newLife;
        if (newLife===0){
            // console.log("Game Over!");
            gameOver();

        }

    }
}
function removeBackgroundColorById(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}
//capture keyboard key press (call back function)
document.addEventListener('keyup',handleKeyboardButtonPress);
function continueGame(){
    //step-1: Generate a random alphabet
    const alphabet=getARandomAlphabet();
    console.log("Your random alphabet is:",alphabet);
    //set randomly genarated alphabet to the screen
    const currentAlphabetElement=document.getElementById('current-alphabet');
    currentAlphabetElement.innerText=alphabet;    
    addBackgroundColorById(alphabet);
}

function play(){
    //hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');
    //reset score and life
    continueGame();
}

//showElementById('final-score');
//hideElementById('play-ground);
// const fairplay=document.getElementById("home-screen");
//set background color

function resetGame(){
    const lifeLine=document.getElementById('current-life');
    lifeLine.innerText=5;
    const currrentScor=document.getElementById('current-score');
    currrentScor.innerText=0;
    removeBackgroundColorById(); 
}


function gameOver(){
    showElementById('final-score');
    hideElementById('play-ground');
    continueGame();
    resetGame();
    
}
