let myArr=[]

const fetch = require("node-fetch")
fetch ('https:/jsonplaceholder.typecode.com/todos/1')
.then(res=> res.json())
.then(json => myArr.push(...json))

myArr.map((item,index)=>{
    Console.log(item)
}
)

async function getData(){
    await fetch('https:/jsonplaceholder.typecode.com/todos/1')
    .then(async (respose)=>{
        return await respose.json()

    })
}