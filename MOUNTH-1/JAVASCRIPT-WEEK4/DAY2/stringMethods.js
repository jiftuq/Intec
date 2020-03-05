var message = "Neque porro quisquam";
var myConsole = message.length;
myConsole = message.indexOf('"');
console.log(message.length)
myConsole = message.lastIndexOf("porro");
console.log(message.lastIndexOf())
myConsole = message.search('quis')
console.log(myConsole);

var showInConsole;
showInConsole = message.slice(2,6);
showInConsole = message.slice(0,-5);
showInConsole = message.replace(/[^a-zA-Z0-9]/g, 'foo');
showInConsole = message.replace(/porro/g, '01');
showInConsole = message.toUpperCase();
showInConsole = message.toLowerCase();

message= "Firstname ";
var myLastName = "    Lastname   "
showInConsole = message.concat(myLastName.trim());// removing spaces

//regexr.com

message= "Lorem ipsum"
showInConsole = message.charAt(1);
showInConsole = message.charCodeAt(1); // UTF-16
showInConsole = message[0]; //inddex number start from 0
message = "az,z,z,z,z,z,z,z,z";
console.log(typeof(message));
showInConsole = message.split(',');




console.log(showInConsole);
