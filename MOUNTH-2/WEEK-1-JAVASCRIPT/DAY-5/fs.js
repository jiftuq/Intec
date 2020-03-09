const fs = require('fs');
var myData = [{
    "point1":1,
    "point2":2,
}]

var data = JSON.stringify(myData);
console.log(data);

fs.writeFile("data.json", data, 'utf8' ,(err)=>{if(err){console.log('asd')}})