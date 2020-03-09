var  people = {
    name: 'jack',
    age:29
}

var myKey;
for(myKey in people){
    console.log(people[myKey])
}

var students = [
    {
        name: 'jackie',
        age:29
    },
    {
        name: 'jackor',
        age:29
    },
    {
        name: 'jacker',
        age:29
    },
    {
        name: 'jackrt',
        age:29
    }
]
for(myKey in students){
    console.log(students[myKey])
}

for (myKey of students){
    console.log(myKey.age)
}