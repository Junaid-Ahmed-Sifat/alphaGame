// function play(){
//     // hide the home screen
//     const homesec = document.getElementById('home-screen');
//     homesec.classList.add("hidden")

//     // show the playground
//     const playg = document.getElementById('playgr');
//     playg.classList.remove('hidden');

// }

function continueGame(){
    const alpha = getARandomAlphabet();
    console.log('your random alphabet', alpha)

    // set randomly generated alphabet to the screen
    const curAlphaElem = document.getElementById('current-alphabet');
    curAlphaElem.innerText = alpha;

    // set background color
    setBackgroundColorById(alpha);
}

function play(){
    hideElementbyID('home-screen');
    showElementbyID('playgr')
    continueGame();
}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add("bg-orange-300");

}