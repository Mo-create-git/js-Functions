//Functions are used to perform various operations on the data.
//They allow us to manipulate the data in more effective way.

//there are two was to define a function in javascript
//1. Function Declaration
// function sayHello(){
//     console.log("Hello")
// }
// // Function Calling
// sayHello()
// sayHello()

sayHello(); // Function Calling

function sayHello(){
    console.log("Hello")
}
// we can function in any we want..this is called js hosting.

//functions with parameters
function sum(num1,num2){
    console.log(num1 + num2)
}
sum(10 , 5 )
sum(20 , 20)

function sub(num3,num4){
    console.log(num3-num4)
}
sub(10 ,5)
sub(0 , -1)

function mul(num5,num6){
    console.log(num5 * num6)
}

mul(3, 4)
mul(5, 6)

function div(num7,num8){
    console.log(num7/num8)
}
div(987654321,1234567890)
