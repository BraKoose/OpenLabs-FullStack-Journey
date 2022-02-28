alert("Welcome Open Labs")

var myFirstName = 'Koose';
var myAge = 21
alert("welcome " + myFirstName + " my age is" + myAge)
console.log(myFirstName)

function sayHello(){
    alert("Koose");

}
function storeData(){
    document.write("info Stored")

}
document.getElementById("myBtn").onclick = sayHello;
document.getElementById("Store").onclick = storeData;