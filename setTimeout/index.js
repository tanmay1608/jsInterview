

//printing 1 after one second, 2 after second and so on
// function x(){
//     for(var i=1;i<=5;i++){
//         setTimeout(function(){
//             console.log(i);
//         },i*1000);
//     }
//     console.log("hello");
// }
// x();

/*
so here instead of 1 2 3 4 5
we get 6 6 6 6 6 after respective delay

and this is due to closures as each function creates a closure and
we know it rememebers its lexical enviornment and it remembers reference of i not its value
thats whay after running for lop
value of i is 6 so every call function prints 6
*/


/*
How to fix this use let , as let is block scope,
in each iteration i gets a new copy of itslef , so call back function referes to ne copies of i

*/

// function x(){
//     for(let i=1;i<=5;i++){
//         setTimeout(function(){
//             console.log(i);
//         },i*1000);
//     }
//     console.log("hello");
// }
// x();

// we can't use let : follow up question by interviewer
function x(){
    for(var i=1;i<=5;i++){
        setTimeout(function(){
           makeTask(i);
        },i*1000);
    }
    function makeTask(i){
        console.log(i);
    }
    console.log("hello");
}
x();