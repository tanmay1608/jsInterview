//Hoisting:Js engine reads the whole code and take all variable and functions and assigns memeory for them 
// and give them a vavlue as undefined and in case of function while function body is treated as value and host them ast the top of the enviornment.


//in browser it will print 
/*
ƒ getName(){
    console.log("Hello");
}
*/

// in IDEs it will print
/*
[Function: getName]
*/ 


// getName();
// console.log(x);
// console.log(getName);
// var x=7;
// function getName(){
//     console.log("Hello");
// }
// console.log(x);

//arrorw function

//getName(); // throw a type error
console.log(x);
console.log(getName);// here its is undefined as it is treadted as vairable
var x=7;
var getName= ()=>{
    console.log("Hello");
}

console.log(x);

// so in arrow function in memeory phase
// it will be treated as variable so it will be assigne dby undefined


var getName2=function (){
    //in this as well it is treated as variable
}



//Traditional function

// getName();// can call not get any error
// console.log(getName);// conatins whole function declaration
//  function getName(){
//     console.log("Hello");
//  }
//  console.log(getName);// contains whole function declaration



//Function expression(Anonymous function: function without name)
/*
function expression are not hoisted 
as initially they are undefined and when executes gets
whole function assigned to it
*/
// getname();// cant call as till now it is variable
// console.log(getName)// undefined
// var getName= function(){
//     console.log("Hello");
// }
// console.log(getName);// whole function

//Arrow function

// let getName=()=>{
//     console.log("Hello");
// }

/*
Function declarations (using the function keyword) have their names hoisted, meaning you can call them before their actual declaration in the code. However, function expressions, including arrow functions, are not hoisted in the same way. You cannot call them before their declaration because they are essentially assigned to a variable, and variable declarations are hoisted differently.
*/


// dont know much about it
var a=function y(){

}



