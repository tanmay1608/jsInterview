//function Statement aka function declarations: The way of creating a function like this is known as function statement
a();
b();
function a(){

}

//function Expression: function is like value we are initilizing b with a value
var b=function(){

}

//Interview question: difference between function statement and function expression
// so, the differnece is in hosting
// function statement is hoisted but in case of function expression it is treated as variable and undefined is assigned to it so, we get error when we call 



//function Declaration: function declaration and function statement are same thing


//Anonymous Function: A function without a name, but it dont have its own identity
// so if we call it like this we get syntax error, as it look like function statement but
//function statement should have a name
// function (){

// }

//sso, we use anonymous function when we want functions as values
// like we did in Expression Fujnction


//Named Function Expressions: similar to function expression but instead of anonymous function we gave named function

var a=function x(){
    console.log("hello");
}
a()// we can call it like this
// but can we call it by its name like x() what will happen
// so we will get error
//x is not defined
// so we are getting this because x is not a function outer scope
//it is a local function
// so we can call it inside function x();
//like this
// var a=function x(){
//     console.log(x);
// }



//Difference between parameters and Arguments
//so, the identifiers or lables  in function aree known as parameters. i.e: function b(parm1,param2){};
//and the values we pass inside a function is known as arguments. i.e: b(1,2);




//First Class Functions: Ability to be used as valriables

var b=function(param1){

    console.log(param1);
}
b(function(){
    console.log("Hello");
});// anonymous function passed as variable(argument)


// can pass function statements as well
function xyz(){

}
b(xyz);

var c=function(){
    return function(){

    };
}

c();// function returned from function

//So, FCF : The ability of functions to be used as values and can bes passed as argument 
// to another functions, can be returned from functions
// this is abilty is FCF

//Functions are first class citizens : so, this ability of function makes them first class citizen

// let c=function(){
//     return function(){

//     };
// }

//same thing follow TDZ rules



