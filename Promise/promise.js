const cart=["pant","shirt","kurta"];

//consuming promise
const promise=createOrder(cart); // we get orderID

promise.then(function(orderID){
     console.log(orderID);
    //proceedToPayment(orderID);

    //this is succecss callback

    return orderID;
})
.then(function(orderId){
    //so this is like promise hell , code is growing horizontally, we generally return promise , and we handle in the next level of the chain
    // return proceedToPayment(orderId).then(function(paymentInfo){
    //     console.log(paymentInfo);
    // })

    return proceedToPayment(orderId);

})
.then(function(paymentInfo){
    console.log(paymentInfo);
})
.catch(function(error){
    console.log(error.message);
    //this is failure callback
})
.then(function () {
    console.log("No matter what , I will define1tley be called");
  })
console.log(promise);

//these all chain is known as promise chaining

// so , then methods after catch will definately be called
// so, here as inf false validation , after first then other tehn dint call as we enconter an error,
// but if we want to call other then methods then just put catch after that then 
// matlab catch sirf apne upar waale k error handle krta h



//attaching callback to promise
//so even here we are using cllback then how it is better than previos approach
// so, here we are not passing callback we are attaching it, so here we have more control


///////////////////////////////////////////////
//Producing Promise
function createOrder(cart){
    const promise=new Promise(function(resolve,reject){
                //createOrder
                //validateCart
                //orderID

                //these resolve and reject callbacks function procided by js


                if(!validateCart(cart)){
                    //return error
                    const error=new Error("invalid cart")
                    reject(error);
                }

                setTimeout(function(){
                    const orderId="12345";
                    resolve(orderId);
                },5000);
              


    });

    return promise;

}

function validateCart(cart){
    return true;
}

function proceedToPayment(orderID){
    return new Promise(function(resolve,reject){
        resolve("succecss");
    });
}

//States of Promise
/**
 * Promise can be in 3 states
 * 1-> Pending: initial state , neither fullfiled nore rejetced
 * 2-> fulfilled: operation completted successfully
 * 3-> rejected: operation failed
 */

const newPromise=new Promise((resolve,reject)=>{

    setTimeout(()=>{
        console.log("Task completed");
    },1000)
})