
 var myButton = document.getElementById("myBtn");
 var myBodyElement = document.getElementById("bt");
 var removeButton = document.getElementById("myBtn1");

 
 let productList = []

 function addProduct(){
    var inputProduct = document.getElementById("inputProduct").value;
  //  
    productList.push(inputProduct); // send product name to productlist
    console.log(productList)
 }
 


 myButton.addEventListener("click", addProduct);
 removeButton.addEventListener("click",removeProduct);

 //console.log(productList);
 

 
 productList.forEach((elementName)=>{
     console.log(elementName)
 })

 function removeProduct(){
    console.log(productList);
     return productList.pop();
    
 }

