var i= 0;
var timer=50;

function x(){
    console.log('test')

    i++;
    if(i<timer) {
        setTimeout(x,1000);
    }
}
x()