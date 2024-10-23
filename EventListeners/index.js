

//count number of times button is clicked
// this will work but not a good solution, as count is global can be accessed by any one ,so to proved data protection we will use closures
// let count=0;


// document.getElementById("clickMe").addEventListener("click",function a(){
//     console.log(++count);
// });


//so we put all this inside a function , as a forms a closure with count

function attachEventListener(){
let count=0;
document.getElementById("clickMe").addEventListener("click",function a(){
    console.log(++count);
});
}

attachEventListener();

//Garbage collection & removeEventListeners
//Why do we need to remove event listeners
// so event listeners are heavy: means they forms closures and even 
// there is nothing in call stac they will not free memorty as it is holding count


