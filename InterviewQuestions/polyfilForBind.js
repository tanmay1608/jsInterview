const obj={
    name:"Tanmay",
    ag1:24,
    printName:function(){
        console.log(this.name);
    }
}

const obj1={
    name:"Barjatya",

}
// obj.printName();
// obj.printName.call(obj1);

const myPrintName=obj.printName.bind(obj1);
//myPrintName();


//polyfil for  bind
const name={
    firstName:"Tanmay",
    lastName:"Barjatya"
}

const printName=function(hometown,state,country){
    console.log(this.firstName+" "+this.lastName,"hometown: "+hometown,"state: "+state,"country: ",country);
}

Function.prototype.myBind=function(...args){
    //so as printname is calling myBind so this here points to printname
    const self=this;
    console.log(args);
    params=args.slice(1);
    return function(...args2){
       // self.call(args[0],parms);//we cant pass array in call

       //using apply
       self.apply(args[0],[...params,...args2]);
       //so one more problems user can also pass arguments from printMyName
    }
}

const printMyName=printName.myBind(name,"Jaipur", "Rajasthan");
printMyName("India");

//we can add more checks like whether printName is function or not
console.log(typeof printMyName === "function")

 