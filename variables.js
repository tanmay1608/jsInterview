//decalred in 4 ways
//1-> Automatically
x=5;
console.log(x);

//2-> var used in all js code from 1995 to 2015.
//3-> let and const keyword were added to js in 2015 (ES6) ECMAScript =modern JS.

//var keyword should only be used in code written for old browsers/

var a=10;
let b=10;
const c=15;

//var
var myName="Tanmay";

//block
{
 //re-declaring name
 var myName="barjatya";
}

console.log(myName);

//So in var is not block scope whereas let is bloack scope;

let name="Tanmay";

{
    let name="Barjatya";
    console.log(name);
}

console.log(name);

//as let is bloakc scope so, block ka mamla block m hi khatam ho gya

{
    let check="Check";
}

//here we cant access check as let is block scope bu var has global scope
//console.log(check);

//var can be redeclared 
//i.e
var p="name";
var p="mane";
//but let and const cant
//but we can update let
//const cant be updated and redeclared
//dekha jaaye to const varaible h hi nhi



//no error
var m="name";
let m="jjjj";

//error
let o="kkkk";
var o="kkkk";

//error
const author="barjatya";
let author="lll";


//*****
/*
var have function scope but not block scope
*/