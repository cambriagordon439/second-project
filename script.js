//Javascript File
let targetNum;

targetNum= Math.floor((Math.random() * 100) + 1);
console.log (targetNum);
let resultDisplay = document.getElementById('result');
console.log(resultDisplay);

function checkResult(){
    let guess = parseInt(document.getElementById('number').value);
    console.log (guess);
    if (guess==null){
        return;
    }
    else if(guess==targetNum){
        resultDisplay.style.color="#4BB543" ;
        resultDisplay.innerHTML = "YOU GOT IT! :)";
    }
    else if(guess > targetNum){
        resultDisplay.style.color= "#d9534f";
        resultDisplay.innerHTML= "TOO HIGH! :(";
    }
    else  if (guess < targetNum){
        resultDisplay.style.color="#d9534f";
        resultDisplay.innerHTML= "TOO LOW! :(";
    }
}
