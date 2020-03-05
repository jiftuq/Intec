var books = ['book1','book2','book3','book4','book5']
showInConsole = books.shift();
showInConsole = books.unshift("Newbook1");
console.log(showInConsole, "\nNewArray=> ", books)