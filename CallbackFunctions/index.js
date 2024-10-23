//What is callback functions?
//so , we learned earlier that functions are first class citizens in js, 
//so , when we pass function as argument then it is callback function
// so then function we pass i another function is callback function


//******** Js is a synchronous and single-threaded language: means it can do one thing at a time in an order
//synchronous means sequentially: one line at a time


// but due to callbacks we can do async thing in js

setTimeout(function(){
console.log("Timer");
},5000);

function x(y){
    console.log("x");
    y();
}
x(function y(){
console.log("y");
});// output x y Timer

//so, here y is a callback function
// but why it is callback function
//so ,as we are not calling it right now , we will call it later, that's why


// so , as js is synchrounous so code will executeline by line
/*
first, setTimeout registering happens
so ,isme callback function ko store kiya jaayega and wil attach se timer to it
so, now js will not wait for 5000 ms, it will move on: js will not wait for anyone 
and this provide it asynchronity


Js has only one call stack and we can call it main thread
So, every thing which executed in our page is executed through call stack only

So, every operation which blocks the call stack , that is known as blocking the main thread.
so, assume a takes lot of time to execute so in that case no other operations perforemd 
so, to avoid that we should use async operations for operations that takes time




*/


//deep about event listeners
//so whenver we add eventlistner we are attaching a callback to an event

// document.getElementById("btn").addEventListener("click",()=>{
//     console.log("button CLicked");
// })

//Closure demo with eventListner
//now we want to count number of times button is clicked it is simple just do count++
//but catch it that we want to count to be secure , so we cant do it with global varibale so we 
//use closure
function attachEventListener(){

    let count=0;

document.getElementById("btn").addEventListener("click",()=>{
    console.log("button CLicked",++count);
})
}

//garabage collection and remove eventListeners
// so, we remove eventListners because they are heavy ,  they form closuers 


