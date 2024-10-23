

const student={
    firstName:"Tanmay",
    lastName:"Barjatya",
    printFullName:function (){
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

student.printFullName();

//now we have different object
const student2={
    firstName:"Gilfoyle",
    lastName:"08"
}

//nowe we want to print full name but we dont have printFullName function
//so we will borrow function from different object

//call
student.printFullName.call(student);


//but functions generally not resides inside object so,

const student3={
    firstName:"Tanmay",
    lastName:"BarjatyaNew",
    
}

function printFullName (state){
    console.log(`${this.firstName} ${this.lastName} State: ${state}`);
}

printFullName.call(student3,"Rajasthan")



//basically call's first arguemnt is reference to the this keyword and later arguments are argumnts to the function

//apply
//it it similar to call but difference in how we pass argument first arguemnt is reference to this for remaining arguments we pass array of argumnets

printFullName.apply(student2,["Punjab"]);



//this inside arrow function
const obj={
    a:10,
    x:()=>{
        console.log(this);// global object
    }
}

obj.x();

//using call , apply and bind with arrow

const obj1={
    name:"Tanmay"
}

const printName=()=>{
    console.log(this);// global object
}

printName.call(obj1);

//but he pusrpose of call , bind and apply is that it invokes the function but the context we decided 
//but arrow function inherits this from it parent scope so, this cannot set by call,apply and bind in arrow function


//ex-2
const obj3={
    name:"Tanmay",
    x:function(){
       
        const y=()=>{
            console.log(this);// obj3
            
        }
        y();
    }
}
obj3.x();


//this inside DOM elements => reference to HTMLelement

const myBtn=document.getElementById("myButton");

function abc(){
    console.log(this);
}

myBtn.addEventListener("click",abc);

const obj4={
    x:10,
    abc(){
        console.log(this);
        function cb(){
            console.log(this);
        }
        cb();

        const bc=()=>{
            console.log(this);
        }
        bc();
    }
}

obj4.abc();

