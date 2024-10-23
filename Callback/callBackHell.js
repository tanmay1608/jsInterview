//we achieve asynchronous nature useing callback

// lets assume we have a cart
const cart=["watch, pants","shoes"];

//now we create order, then proceed to payment, show orderSummary

//so for this first we have to call  api.createORder, then api.proceddTOPayment, as this ia async operation
//as proceddTOPayment has dependency on create order
//so for this kind of begaviour we use callback

api.createOrder(cart,function(){
    api.proceddToPayment(function(){
        api.showOrderSummary();
    });
});

//we have passed callback function to createOrder and now it is responsibilty of createOrder to create an order and call prcoeddTOpayment
// and this way we handle async operations

//Now there is a problem
//so in large codebases , when a pi call another api and so on , so it forms a callback Hell
//So, CallBack hell is callback inside a callback....

// this type of codebase is unmaintable

///1-> first problem of using callback is callback hell: and this strcucture is known as pyramid of DOOM.
///2-> second problem is inversion of control
//so,inversion of control is like , we lost control of our code when we use callbacks
// how we are loosing the control

//so lets take this example
api.createOrder(cart,function(){
    api.proceddToPayment();

});
// so, we gave api.proceddTOPayment to createOrder and we are blindly trusting the createOrderApi

// and we are expecting that at some point create order will create an order and call proceddTo pymnet
//BUT this is very risky
//as we dont know it will work or not

//so , when we have a callback funtion anf we apss it ot another function
//we are giving control of our written code to other code and we dont know whats happeing behind the scene.
// and thsi is the problem we face when using  call backs


//Importanc eof callbacks
/**
 * handles async operations in js
 * asynchrous programming exist in js because callback exists
 * 
 * 
 */

/**
 * Issues with callabck
 * -> cllback hell
 * -> inversion of control: invert of control
 */