function hideElementbyID(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementbyID(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function getARandomAlphabet(){
    const alphastr= 'abcdefghijklmnopqrstuvwxyz'
    const alphaarr = alphastr.split('');
    console.log(alphaarr);

    // get idx 

    const randomnum = Math.random()*25;
    const randomidx = Math.round(randomnum);
    

    const alpha = alphaarr[randomidx];
    // console.log(randomidx, alpha);
    return alpha;
}