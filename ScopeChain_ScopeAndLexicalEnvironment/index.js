
//Scope means where we can access our function or variable inside our function
/*
Two concepts
1-> what is the scope of variable b
2-> is b inside the scope of function c
*/ 


/*
Scope is directly dependent on lexical environment

So whenever an execution context created , a lexical environment={local memory+ lexical enviornment of its parent} is also created

lexical means in heirarchy or sequence
so, lexical environment is the local memory along with he reference of the lexical enviornment of its lexical parent.

so, we can say c is lexically inside a and a is lexically inside global scope

so in case of global lexical enviornment points to null as thier is no parent


scope chain: chain of all lexical enviornemnt and the parent scopes, and it defines whether a function or variable is present inside the scope
*/
// function a(){
//     var b=10;
//    c();
//    function c(){
    
//    }
    

// }

// a();
// console.log(b);

if(true){
    var a=10;// a is scoped to the global scope or a is lexically inside scope of global scope
    let b=20;// b is lexically scoped to block
    const c=30;// c i lexically scoped to block
}

