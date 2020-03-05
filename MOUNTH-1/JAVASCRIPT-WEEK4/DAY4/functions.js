var datalow = 5;
function keeper1(b){
    return b;
}
function keeper2(b){
    return b;
}







var newArray = [
    {
        name: "Chris",
        age: 25

    },
    {
        name: "Jack",
        age: 26

    },

]


function shoEverythinginSingleLine1(myList){
    return myList.sort(function(a,b){
        return b.age - a.age
    }).filter(function(student){
        return student.age >=26
    }).map(function(value){
        return value.name;
    })
}
console.log(shoEverythinginSingleLine1(newArray))

var students = [
    {
        name:"Student1",
        score:22
    },
    {
        name:"Student2",
        score:65,
    },
    {
        name:"Student3",
        score:23,
    },
    {
        name:"Student4",
        score:88,
    },
    {
        name:"Student4",
        score:90,
    },
    {
        name:"Student5",
        score:37,
    }
    ]
function shoEverythinginSingleLine(myList){
    return myList.sort(function(a,b){
        return b.score - a.score
    }).filter(function(student){
        return student.score >=50
    }).map(function(value){
        return value.name;
    })
}
console.log(shoEverythinginSingleLine(students))






/* students.map(function(value,index,array){
 //console.log(value)
 //console.log(index)
 //console.log(array)
})
students.forEach(function(value){
 console.log(value)
})
students.filter(function(student){
    return student.score >=50
}) */
