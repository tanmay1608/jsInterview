// this keyword points to the window onject at the global level

//Window object
/*
Window is the global object which is created along with the GEC(Global Execution Context)

so if even we run a empty js program it will create window object

so when we run a js program a global object is created(window), a global execution context is created and a this variable is created
 so in case of browsers this global object is known as windows but in other js engines it will be known by something else

*/

// and this is also created for functional eceuction context which is equal to window
console.log(this===window);

