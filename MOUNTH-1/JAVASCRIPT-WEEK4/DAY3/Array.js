var books = ['book1','book2','book3','book4','book5'];
var oldArray = document.getElementById('oldArray').innerText=books;

function RemoveElement(){
    var showInConsole = books.shift();
    var myResult = document.getElementById('result').innerText=showInConsole;
    var newArray = document.getElementById('newArray').innerText=books;
    return myResult;
   
}