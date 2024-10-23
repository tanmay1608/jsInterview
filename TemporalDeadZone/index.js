/*
Are let and const declarations are hoisted
Ans: Yes let and const declarations are hoisted but
they are hoisted different then var declarations

Q:Are let and const declarations are hoisted
Ans: They are in Temporal dead zone for the time being 
*/ 

// console.log(b); // so here we get undefined due to hoisting
// console.log(a);// as we knoow that let and const declarations are also hoisted, so it should also give undefined
// but not we get reference error: can not access a before initilization
// we get this reference error when we try to access a variable which is not present in program
//reference error: x is not defined


// here a is in temporal dead zone

// let a=10;

// var b=100;


/*
How to check whether let and const are hoisted or not
*/ 


// let a=10;
// console.log(a);
// let c=100;
// var b=100;

// global scope: Variables declared outside of any function or block are in the global scope.
let bar = 41;
console.log(bar); // 41

if (true) { // block scope
 console.log(bar); // ReferenceError (not 41) <-- PROOF OF THE HOISTING / TDZ
 let bar=42;// if this was not there, then both bar will print 41
 console.log(bar); // 42
}

console.log(bar); // 41 


// how to avoid TDZ
//put declarations and initilizations at top