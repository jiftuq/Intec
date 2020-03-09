// html elements
var placeholder1 = document.getElementById('placeholder1');
var placeholder2 = document.getElementById('placeholder2');
var diceRollButton = document.getElementById('diceRollerButton');
var message = document.getElementById('message');

//EventListener
diceRollButton.addEventListener('click' ,diceRollFunction);

//function
function diceRollFunction(){
    var diceRollSides=6;
    var diceRollMatchs=[]
    var randomNumber1 = Math.floor(Math.random() * diceRollSides) +1; //+1 to avoid zero  ; math.floor to avoid point virgule
    var randomNumber2 = Math.floor(Math.random() * diceRollSides) +1;
    if(randomNumber2==randomNumber1){
        //console.log('number of match',randomNumber1, " ",randomNumber2)
        diceRollMatchs.push(randomNumber1)
        diceRollMatchs.push(randomNumber2)
        message.innerText = "Matched";

    }else {
        message.innerText = "Roll baby";
    }

    placeholder1.innerText=randomNumber1;
    placeholder2.innerText=randomNumber2;
    console.log(randomNumber1 +' '+randomNumber2);
    console.log(diceRollMatchs);
    console.log('testing');
}
