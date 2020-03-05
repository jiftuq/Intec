var books = ['book1','book2','book3','book4'];
var showInConsole;
showInConsole = books.toString();
showInConsole = books.join("=>");
showInConsole = books.pop();
console.log( "Before => ", typeof(showInConsole), ">", showInConsole, "\nAfter =>", books );

books.push("Ecce");
console.log(books)