function hideElementbyID(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementbyID(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}