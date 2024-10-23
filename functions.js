function helloWolrd(name){
    console.log("Hello Wolrd"+" "+name);
}

function check(num){

    console.log(Math.floor(num/3));
}


//return value in function

function sum(a, b){

    return a+b;
}

var addedValue=sum("hello",10);
//console.log(addedValue);


//BMI Calculator

function bmiCalculator(weight,height){

   // var bmi=weight/(height*height);
   var bmi=weight/Math.pow(height,2);
    return bmi;
}

//Exponentiation **

function exponentiation(a,b){
    var val=a**b;
    return  val;
}

console.log(exponentiation(2,3));

//console.log(bmiCalculator(65,1.8));

//arrow function

const exm1=(a,b)=> a*b; // used when we have to return single statement
const exm=(a,b)=>{
    return a+b;
}

// //so in arrow if we are passing only single argument then  both are correct
// var c=(a)=>{

// }
// var c=a=>{

// }

console.log(exm(1,2));

const sub=function(num1,num2){
    return num1-num2;
}


// self invoking function: don't need to call
// or we can say anonymous self-invoking function (

(
    function(){
        console.log("hello");
    }
)();


// The typeof operator in JavaScript returns "function" for functions.

// But, JavaScript functions can best be described as objects.

// JavaScript functions have both properties and methods.


//so , earlier if we pass less argumnets in function then required
// then by dafault it take undefined now in es6 we can use something this
function check1(a,b=10){

}

check1(5);
// so ,as we dint pass b so b will be updated to 10;

// argument are passed as value in js









