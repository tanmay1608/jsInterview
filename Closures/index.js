
//Closure is combination of function bundeled with its lexical environment

var ch=1;

function x(){
    var a=7;
    function y(){
        console.log(a);
    }
    return y;

    // return   function y(){
    //     console.log(a);
    // }
     
    // both are same thing
}
var z=x(); // so, here we are getting function code along with its closure
console.log(z);
var p=z();
p();

// var a=1;


// function cali(op){
//     op();
// }

// cali(function add(){
//     console.log("add");
// });

