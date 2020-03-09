var message = "Hello Dom";
var myApp = document.getElementById('app');
myApp.firstElementChild.innerText= "text";


//you should not use cons and let for hoisting
//variables and constants declared with let or const are not hoisted

var h1 = document.getElementById('test')
h1.setAttribute('class','btn btn-success')
var link = document.getElementById('link')
link.setAttribute('href','https://google.com')


console.log(myApp.classList.length)

for(var i=0; i<myApp.classList.length; i++){
    console.log(myApp.classList[i])  // myApp.classList[1] ,2,3
}


// find type of html element
console.log(h1.nodeName);  // result: H1
console.log(myApp.nodeName);

//Finding HTML element
    //getelementbyid
    //getelemtnbytagname
    //getelementbyclassname


var findElement = document.getElementsByTagName('button');
console.log(findElement);

// Outer HTML property
// findElement[0].outerHTML="<p>hello</p>";
findElement[0].setAttribute('onclick','myFunc()');
function myFunc(){
    console.log('dsfsdfsdf')
}