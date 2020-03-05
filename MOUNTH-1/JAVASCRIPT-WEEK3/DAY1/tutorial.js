console.log("test")
var firstName = 'Chris'
var lastName = 'kwiz'
console.log(firstName, lastName)
/* var, const, let */



var x;
x = 1
console.log(x)

const y = 'this is const';
console.log(y)

let z;
console.log(z)

/*
let = can be updated but not re-declared.
const = cannot be updted or re-redeclared.
var = can be redeclared and updated.
*/

var myMessage = 'Hi, this is default value';
var howmany = 4;

if (howmany>3) {
    myMessage = 'myMessage variable has been updated';
}
console.log(myMessage)

//math

var firstNumber;
var secondNumber;

firstNumber = 10;
secondNumber = 20;
var total = firstNumber + secondNumber;
console.log ("TOTAL=>", total);

var a,b,c;
a=1;
b=2;
c=a+b;
console.log(c)

/*


var a = 5;

var b = 6;

var app = document.getElementById('demo')


var c = a+b;


app.innerHTML = c
*/

var myVariable = 100;
myVariable += 40; // myVariable = myVariable + 40 
console.log(myVariable);

function vue(...args){
    var str = "";
    for(i=0;i<args.length;i++)
    {
        str += args[i];
    }
    console.log(str);
}
vue('hello');

var fullname = 'Jack '
fullname += 'Sparrow'
vue(fullname)

var asd = 6+6;
var test = Number("3") + 1;
var test1 = "3" + 1;
vue(test1, " " , asd, " " , test);

console.log("Substraction=> ", 10-5);
console.log("Division=> ", 10/2);
console.log("Modulus=> ", 100%10);

let myInc= 10;
let myDec = 10;
myInc++;
++myInc;
myDec--;
--myDec;
console.log(myInc, " " ,myDec)

//Comparisons operators
// == > equal to
// === > equal value and equal type
// != > not equal
// > greater than 
// < less than
// >= greater than 
// <== less than
// ? trenary oprator


var intec1 = 5;
var intec2 = 10;
var intec3 = "5";
var intec4 = intec1;
vue(intec1 == intec3); //true checking value only
vue(intec1 === intec3);
vue(intec1 == intec4);
vue(intec1 != intec2);
vue(intec1 > intec2);
vue(intec1 >= intec2);

// Logical operators
var showMe = (intec1!=intec2) && (intec1 < intec2);
showMe = (intec1 > intec2) || (intec1 == intec2);
showMe = !(intec1<intec2);
showMe = !(false)
console.log(showMe);

vue(typeof(1))
vue(typeof(NaN))
vue(typeof(new Date()))

var salaireBrut= 1500;
var salaireNet= Number(salaireBrut - (salaireBrut/30))
console.log(salaireNet)