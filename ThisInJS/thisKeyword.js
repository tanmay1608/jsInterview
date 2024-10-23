/*
In JavaScript, the this keyword refers to an object.

Which object depends on how this is being invoked (used or called).

The this keyword refers to different objects depending on how it is used:
*/



// 1-> In an object method, this refers to the object.

const user={
    username:"Tanmay",
    age:"24",
    getAge:function (){
        console.log(this);        
    }
}

//user.getAge();// object

// 2-> Alone, this refers to the global object.
//console.log(this);// in browser this == window but in node enviornment this will be empty object {};

// 3-> In a function, this refers to the global object.
function abc(){
    console.log(this);
}
//abc();// global object

// 4-> In a function, in strict mode, this is undefined.
// 5-> In an event, this refers to the element that received the event.
// 6->  Methods like call(), apply(), and bind() can refer this to any object.



///////********Arrow function */

//Arrow functions do not create their own this binding
//In normal functions, a this variable is created which reference the objects that call them 

//example 1
const user2={
    username:"Tanmay",
    age:"24",
    getAge:function (){
        console.log(this);        
    }
}

//getAge is anonymous function so this will, print object
//user2.getAge();


//example 2
const user3={
    username:"Tanmay",
    age:"24",
    getAge:function (){
        console.log(this);// here this is object which called this method
        function print(){
            console.log(this); //but here print() function is not called by any obj
        }
        print();
               
    }
    
}


//user3.getAge();// global 



// now similar things with arrow function

//example 1With arrow
const user4={
    username:"Tanmay",
    age:"24",
    getAge:()=>{
        console.log(this);        
    }
}

/**
 By using an arrow function for getAge, 
 this function does not automatically create a this variable. 
 As a result, any reference to this would point to what this was before the function was created.
 */
//user4.getAge();//this was pointing to the Window object before getAge was created.


//example 2 with arrow


/**
 we have getAge as a normal function which means a this variable is automatically created in it. 
 Then we have print which is an arrow function.

 Because user is calling getAge , the this in getAge would point to user5.
 */
const user5={
    username:"Tanmay",
    age:"24",
    getAge:function (){
        console.log(this);// here this is object which called this method
        const print= ()=>{
            console.log(this); //but here print() function is not called by any obj
        }
        print();
               
    }
    
}


user5.getAge();// obj

/*
Since print is an arrow function, 
it doesn't create its own this variable. 
Therefore, any reference to this would point to what the value of this was before the function was created. 
In this case where obj calls getAge, this was pointing to obj before print was created.
As you can see in the results, by logging this from print, obj is the result.
*/
