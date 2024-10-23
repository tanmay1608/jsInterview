/**
 * What is async?
 * What is await?
 * How async await works behind the scenes?
 * Exampled of using async/await
 * Error handling
 * Interviews
 * Async await vs Promise.then/.catch
 */

/**
 * Async: Async ia a keyword used before a function to create a async function
 * What is Async function:  
 */

//Always returns a promise
//2- cases
/**
 * 1-> return a promise from here .
 * 2-> return a non promise value then this function  will wrap it in promise
 */

const p=new Promise((resolve,reject)=>{
    resolve("PRomise");
})
// async function getData(){
//      return "String";// wraped insde a promise
// }

// async function getData(){
//     return p;// will this will bes rwapped insde a promise ??
//     // no, if we return a promise it will be retured as it is , without wraping
// }
// const data=getData();
// console.log(data);

//async and await are used to handle promises

async function handleProsmise(){
    //await : await is a keyword which is used in fornt of promise and it is only used inside a async function
    // and it resolves the promise
   const output= await p;
   console.log(output);
}

//handleProsmise();


//deep dive into promise
const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("p1 Promise resolved");
    },10000);
})

const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("p2 Promise resolved");
    },5000);
})


//old way of resolving promise vs new
/**
 * Earlier we were using .then
 * 
 * 
 */

function getData(){
    //so, here js engine will not wait for promise to be resolved 
    // it will print "promise resolved using .then" first
    p1.then((output)=>{
        console.log(output);
    });
    console.log("promise resolved using .then");
}

//getData();


async function promiseHandler(){
    // oh man, here js Engine will wait for promise to resolved at line 79, and once promsie resolved
    //so, program will wait here , dosent matter how much time it take.
    console.log("hello world");
    const output=await p2;
    console.log("promise resolved using async/await");
    console.log(output);

    const output2=await p1;
    console.log("promise resolved using async/await2");
    console.log(output2);

    //no what will happen as we have two promises to resolve?
    //i guess first upper p1 reolved(take 10 s) then lower (takes a nother 10s)
    //oh my friedn you are wrong
    // both promises reolved simultaneously

    //ok , i think we are using same promise that'why they resolved simulataneouly

    //ok, then make both promises different

    // so p2 should have resolve din 5s but it took 10s 
    //now reverse the order p2 first then p1




}

promiseHandler();
