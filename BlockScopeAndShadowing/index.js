// block is also known as compond statement 
/*
A block is used to combine multiple statements
*/ 

//why we combine mupltie statement
// now this if expects a statement
//so , we provided one
//if(true) true;

// now we want multiple statement
// if(true)
// {
//     let a=10;
//     console.log(a);

// }

// console.log(a);
//  let b=200;
// {
//     var a=10;
//     let b=20;
//     const c=30;
//     console.log(b);
// }
// console.log(a);
// console.log(b);

// let a=10;
// {
//     const a=40;
//     console.log(a);
// }
// console.log(a);




//lexial block scope
// {
// const a=10;
// {
//     const a=20;
//     {
//         const a=30;
//         console.log(a);
//     }
//     console.log(a);
// }
// console.log(a);
// }


//shadowing

// var a=100;
// {
//     var a=10;
//     console.log(a);//10
// }

// console.log(a);//10
//As block "a" shadows outer "a" and also updates its value as both are pointing to global "a";

//in case of let and const

let a=10;// its in different scope(script)
{
    let a=100;// its in block scope
    console.log(a);//100
}

console.log(a);//10


//so, let and const shadow krenge but din't update

//Shadowing also works same in functions

var c=100;// global scope
function x(){
    var c=10;// block scope
    console.log(c);
}
x();
console.log(c);


//illegal shadowing

let d=10;

{
    //var d=10; this is illgeal 
    let d=120;//legal
}