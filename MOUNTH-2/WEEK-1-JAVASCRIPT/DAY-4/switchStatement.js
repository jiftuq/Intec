var number = 5;
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