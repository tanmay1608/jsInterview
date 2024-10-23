
const obj={
    name:"Tanmay"
}

function printName(){
    console.log(this.name);
}

const myPrintName=printName.bind(obj);

myPrintName();


Function.prototype.bind=function(obj){
    let func=this;
    return function () {
        func.apply(obj);
      }
}



