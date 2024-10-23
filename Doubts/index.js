


//*****Follow this link this is gold*******
//https://dev.to/rollergui/comment/201l9


//If this is not possible
// for(const i=0;i<5;i++){
//     console.log(i);
// }

//if i were a const, it would throw an error at the end of the first iteration, when i++ was executed.


// then why this
const arr=[1,"name",2,3,4];

for(const val of arr){
    console.log(val);
}
/*

on for ... of loops, you create a variable to keep the value of the iterable (list) to use during that iteration of the loop... 
when it loops over, a new variable will be created, with the same name and different value. 
it does not try to reassign, it just releases the variable that was used in the last iteration and creates a whole new one.

*/
