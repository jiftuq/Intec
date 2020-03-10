// myFigure (player)
var player = document.getElementById('player')

var i=10;
function moveForward(){
    i+=5;
    if(i<450){
        player.style.left=`${i}px`; //same as (i+px)

    }else{
        i=0;
        i+=5;
        player.style.left=`${i}px`;
    }
    setTimeout(moveForward,200)
}

moveForward()