//scope.js
//There are three types of scoping in javascript
//1.block scope
//2.function scope
//3.global scope

//1. Block Scope
//block means anything inside a pair of curly braces
//Example : {}
//                            var    let    const
//Inside of block             ✅      ✅      ✅
//outside of block.           ✅      ❌      ❌ 


//inside of block in var
// {
//     var a = 10;
//     var b = 20;
//     console.log(a)
//     console.log(b)
// }

// //inside of block in let
// {
//     let c = 30;
//     let d = 40;
//     console.log(c)
//     console.log(d)
// }

//inside of block in const
// {
//     const e = 50;
//     const f = 60;
//     console.log(e)
//     console.log(f)
// }
//outside of block in var
// {
// var x = 10;
// var y = 20;
// }
// console.log(x)
// console.log(y)
// //outside of block in let
// {
//     let c1 = 30;
//     let d1 = 40;
// }
//  console.log(c1)
//  console.log(d1)
 
//outside of block in const
// {
//     const e1 = 50;
//     const f1 = 60;
// }
// console.log(e1)
// console.log(f1)

//2. Function Scope
//Function scope means anything inside a function
//Example : function(){}
//                               var    let    const
//Inside of function             ✅      ✅      ✅
//Outside of function            ✅      ✅      ✅

//inside of function in var
// function s1(){
//     var a = 10;
//     var b = 20;
//     console.log(a);
//     console.log(b);
// }
// s1();

//inside of function in let
// function s2(){
//     let c = 30;
//     let d = 40;
//     console.log(c);
//     console.log(d);
// }
// s2();
//inside of function in const
// function s3(){
//     const e = 50;
//     const f = 60;
//     console.log(e);
//     console.log(f);
// }
// s3();
// //outside of function in var
// function s4(){
//     var x = 10;
//     var y = 20;
// }
// s4();
// console.log(x);
// console.log(y);
//outside of function in let
// function s5(){
//     let c1 = 30;
//     let d1 = 40;
// }
// s5();
// console.log(c1);
// console.log(d1);
//outside of function in const
// function s6(){
//      const e1 = 50;
//      const f1 = 60;
//  }
//  s6();
//  console.log(e1);
//  console.log(f1);

//3. Global Scope
//Global scope means anything outside of a function or block
//Example : outside of function or block
//                               var    let    const
                                  
//Outside of global scope        ✅     ✅      ✅
//inside of global scope in var
var a = 10;
var b = 20;
console.log(a,b);
//inside of global scope in let
let c = 30;
let d = 40;
console.log(c,d);
//inside of global scope in const
const e = 50;
const f = 60;
console.log(e,f);








