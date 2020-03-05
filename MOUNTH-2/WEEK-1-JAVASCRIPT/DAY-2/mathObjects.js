//round
console.log(Math.round(9.6));

//Power method returns value of x to the power of y
console.log(Math.pow(9,6));

//square root
console.log(Math.sqrt(96));

//Absolute positive value
console.log(Math.abs(-9.6));

//sin/cos
console.log(Math.sin(90 * Math.PI/180));
console.log(Math.cos(0 * Math.PI/180));

//Find Min and Max number with Mah Object
console.log("Min Number=> ", Math.min(44,66,2,1,4,8,9,41));
console.log("Max Number=> ", Math.max(44,66,2,1,4,8,9,41));

// Generate random numbers
console.log(Math.random()) //generate betwen 0 and 1
console.log(Math.random()*10) //generate betwen 0 and 9
console.log(Math.random()*11) //generate betwen 0 and 10


function GetRandomNumber(min,max){
    return Math.floor(Math.random() * (max-min +1) + min)
}

console.log(GetRandomNumber(1,9))


if(GetRandomNumber(3,6)==5){
    console.log('found it');
}else if(GetRandomNumber(3,6)==3){
    console.log('found the second one');
}else{
    console.log('nothing, try again!');
}


function isEven(value){
    if(value%2===0){
        return true // correct
    }else{
        return false // incorrect
    }
}


