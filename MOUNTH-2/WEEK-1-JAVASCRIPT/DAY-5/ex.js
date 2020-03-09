/*
var answer;
var result=0;

while(answer%2!=0){
    answer = prompt("Enter the number:");
    result += parseInt(answer);
}
result -= answer;
document.write(parseInt(answer));

do{
  //do something here
  myFunction();
}while(condition)
*/

var number;
var sum=0;

do{
    number=parseInt(prompt('enter number'));
    sum+=number;
    console.log(sum);
    console.log(number);
}while(number!=0);

document.write(sum);