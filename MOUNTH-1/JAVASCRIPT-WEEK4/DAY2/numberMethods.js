var myNumber = "10";
var myFloatNumber = "10.5 10 10 10"
// var showInconsole = Number(myNumber);
// showInConsole = +myNumber;
showInConsole = parseInt(myNumber);
showInConsole = parseFloat(myFloatNumber);
showInConsole = Number.isFinite(123);
showInConsole = Number.isInteger(1.5);

console.log(typeof(showInConsole), ">", showInConsole);

var user = 29.9999;
var myIntChecker = user.toFixed(2);

console.log(myIntChecker);
 function fixedTheSalary (Salary){
     return "Salary > " + Salary.toFixed(2)
 }
 console.log(fixedTheSalary(user));