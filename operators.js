//Logical AND assignment operator
var a=0;
var b=3;
var c=a&&b;
//if first value is true second value is assigned
console.log(c);


//Logical OR assignment operator
var d=a||b;
//if first value is false second value is assigned
console.log(d);


//Nullish Coalescing assignment operator
var e=null
var f=e??b;
// if first value is null second value is assigned
console.log(f);