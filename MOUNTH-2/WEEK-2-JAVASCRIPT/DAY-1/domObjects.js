var myApp = document.getElementById('app')
//Find element by classname


var findElementByClassName = document.getElementsByClassName('test');
console.log(findElementByClassName);

//by Classnname by tagname by id name

//create element
var newParagraph = document.createElement('p');
newParagraph.textContent="Lorem ipsum";

// myApp is DIV element
myApp.appendChild(newParagraph)

//remove child
var myList = document.getElementById('myList');
var btn = document.getElementById('btn');
btn.addEventListener('click' , removeFunction);

function removeFunction(){
    myList.removeChild(myList.firstElementChild); //remove firstchild
    //myList.removeChild(myList.lastElementChild); // remove lastchild
    //var test = document.querySelector('#myList li:nth-child(2)');
    //test.remove();
}

