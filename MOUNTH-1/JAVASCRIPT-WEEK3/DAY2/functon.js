function myFunc(){
    console.log('this is my first function');
    //return 'this is a function'
}

function doSomeCalc(a,b){
    var total = a+b;
    //return total;
    console.log(total)
}
//console.log(doSomeCalc(10,15))
doSomeCalc(10,15);


function findBiggestNumber(x,y){
    return x >= y  ? 'X is greater than Y':'X is less than Y';
}
console.log(findBiggestNumber(50,90))

//Exercices

function tellFortune(jobTitle, geoLocation, partner, numKids) {
    var future = 'You will be a ' + jobTitle + ' in ' + geoLocation + ' and married to ' +
   partner + ' ' + ' with ' + numKids + ' kids.';
    console.log(future);
}

tellFortune('bball player', 'spain', 'Shaq', 3);
tellFortune('stunt double', 'Japan', 'Ryan Gosling', 3000);
tellFortune('Elvis impersonator', 'Russia', 'The Oatmeal', 0);

var data = {
    name: "MRX",
    job: "developer",
    age: "29",
    showData: function(){
        return `\nName:${this.name}\nJob:${this.job}\nAge:${this.age}`
            
    }
}

console.log(data.showData())