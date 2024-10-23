//== vs ===
/*
The == operator compares the values of two variables after 
performing type conversion if necessary. On the other hand, 
the === operator compares the values of two variables without 
performing type conversion.
*/ 

var a=10;
var str="10";

if(a===str) console.log("They are same");
else console.log("No they are not");