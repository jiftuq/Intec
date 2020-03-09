var number = 0;
switch (number) {
    case 0:
        console.log('0');
    case 3:
        console.log('3');
    case '9':
        console.log('5 is correct');
        break;
    default:
        console.log('default')
}

var myDay = new Date();
console.log();
switch (myDay.getDay()) {
    case 0:
        console.log('Sunday');
        break;
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wensday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
}


var Winner = "Jackie";
switch (Winner) {
    case "Michael":
        console.log('Winner: Michael');
        break;
    case "Jackie":
        console.log('Winner: Jackie');
        break;
    case "Jack":
        console.log('Winner: Jack');
        break;
    default:
        console.log('default')
}


var checkBoolean = 1 < 5 ? 'true' : 'false';
switch (Boolean(checkBoolean)) {
    case true:
        console.log('returned true');
        break;

    case false:
        console.log('returned false');
        break;

}


var checkBoolean1 = false;
var thisIsABoolen = 'true';
console.log("This IS Boolean Variable=>", typeof (Boolean(thisIsABoolen)));
switch (Boolean(checkBoolean1)) {
    case true:
        console.log('returned true');
        break;
    case false:
        console.log('returned false');
        break;
}

var myBooleanx = true;

function profile() {
    console.log('Show Profile // function callback')
}

switch (myBooleanx) {
    case false:
        console.log('non')
    case true:
        profile()
        break;
}