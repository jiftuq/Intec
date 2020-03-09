let images = [
 'https://s3.amazonaws.com/ogden_images/www.post-journal.com/images/2019/07/14214505/Trump_Democrats_25395-b.jpg',
 'https://i.insider.com/5df35e8ffd9db27428630e94',

]
var i=0;
var timer=10;

function changeImage(){
    var random = Math.floor(Math.random()*2);
    document.getElementById('slider').style.backgroungImage=`url('${images[random]}')`
    i++;
    if(i<timer) {
        setTimeout(changeImage, 1000)
    }
}

