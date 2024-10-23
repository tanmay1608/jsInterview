
const p1=new Promise(function(resolve,reject){
    setTimeout(()=> reject("P1, Success"),3000);
})

const p2=new Promise(function(resolve,reject){
    setTimeout(()=> reject("P2, failed"),1000);
})

const p3=new Promise(function(resolve,reject){
    setTimeout(()=> reject("P3, failed"),2000);
})

//Promise.all()
// const output=Promise.all([p1,p2,p3]);
// output.then(function(output){
//     console.log(output);
// })
// .catch(function(error){
//     console.log(error);
// })

//Promise.allSettled()

// const output=Promise.allSettled([p1,p2,p3]);
// console.log(output);
// output.then(function(output){
//     console.log(output);
// })

//Promise.race();
// const output=Promise.race([p1,p2,p3]);
// console.log(output);
// output.then(function(output){
//     console.log(output);
// }).catch(function(e){
//     console.log(e);
// })

//Promise.any();
const output=Promise.any([p1,p2,p3]);

output.then(function(output){
    console.log(output);
}).catch(function(e){
    console.log(e);
})
