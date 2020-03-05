//var userInput = prompt("say hello");
//var test = confirm("Ar you sure?gsffsaefea")
//document.writeln(userInput);
//console.log(userInput);
//console.log(confirm("ok"));
//alert("this");

//var user = confirm("Are you sure t delete those files");
//console.log(user)
//console.log(typeof(user))
//var result = user ==true? 'OK , DELETED':'NO CHANGED MY MIND';
//console.log(result)

//Exercice with array and prompt;
var name = prompt("Enter firstname");
var familyname = prompt ("Enter familytname")
var age = prompt("age")
var country = prompt("Where are you from")
var student = {
    webLanguage: "",
    name:"",
    country:"",
    age:"",


    showStudent: function () {
        console.log(this.firstname + ""+ this.lastname+ ""+ this.age)
    }
}

student.firstname =name; //array property is equal to prompt (var name)
student.lastname = familyname; //array property is equal to prompt (var familyname)
student.age = age;//array property is equal to prompt (var age)

var showStudent = "Firstname: " +student.firstname+ " "+"\nhehtLastname: "+student.lastname+ "\nage: "+student.age;
console.log(showStudent)
student.showStudent(); //return function
console.log(student); // return object



/*exercise

array obj
prompt
function

array=> WebDevelopers
WebDeveloppers Properties=>
*name
*age 
*web language
*country

//print them out in console
*/

var Auto = {
    forward: function(){console.log("Forward")},
    backward: function(){console.log("backward")},
    turnLeft: function(){console.log("Turning  left")},
    turnRight: function(){console.log("Turning right")},
}

Auto.forward();
Auto.backward();
Auto.turnLeft();
Auto.turnRight();