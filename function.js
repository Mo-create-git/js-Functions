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

let fname = "Saffan"
let age =20
function sayname(){
    console.log(" My name is "  + fname + " and my age is " + age)
}
sayname()

let lname ="Mohammed"
let age2 = 21
function sayname2(){
    console.log("My lname is " + lname + " and my age is " + age2)   }
    sayname2()

let fname2 = "SAFFAN"
let age3 = 20
function sayname3(){
    console.log("My name is " + fname2 + " and my age is " + age3)
    console.log('My name is ' + fname2 + ' and my age is ' + age3)
    console.log(`My name is ${fname2} and my age is ${age3}`) // Template Literals
}
sayname3()

