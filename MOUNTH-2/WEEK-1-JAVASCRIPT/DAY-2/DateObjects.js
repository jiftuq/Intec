// Date Objects

var BelgiumTime = new Date();

console.log(BelgiumTime.getFullYear()); // 2020
console.log(BelgiumTime.getMonth()); 
console.log(BelgiumTime.toLocaleString('nl-BE'));

var getHour = BelgiumTime.getHours();
var getMin = BelgiumTime.getMinutes();
var getSec = BelgiumTime.getSeconds();

var myTime = getHour + ':' + getMin + ':' + getSec ;
console.log(myTime);




var myDays = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"];
