/*

Primitive data types 
N->NULL
N->Number
S->symbol
S->string
B->Boolean
B->Bigint
U->undefined
*/
let a=null;
let b=12;
let c=true;
let d=BigInt("567");
let e="Harry";
let f=Symbol('This is symbol');
let g=undefined;
let x; //bydeafault it is undefined
console.log(a,b,c,d,e,f,g);
console.log(typeof d);
//typeof(f) == typeof f both are same


//Objects
//thses are non primitive data types
//they are key, value pair
const item={
    "Harry":true,
    "Rohan":false,
    "Tanmay":65,
    65:"name"
}

console.log(item[65]);