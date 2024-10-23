
//for each did not change original array, and returns undefined
const arr=[1,2,3,4,5];

const returnedVal=arr.forEach((element)=>{
    return element*2;
});

console.log("arr: ",arr);
console.log("returnedVal: ",returnedVal);




//map also did not change original array and returns new modified array
const arr1=[1,2,3,4,5];

const newArray=arr1.map((element)=>{
    return element*2;
});

console.log("arr1: ",arr1);
console.log("newArrat",newArray);