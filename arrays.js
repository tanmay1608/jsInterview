const fruits=["Apple","mango","oranges",2];

console.log(fruits);
console.log(fruits.length);
for(let a of fruits){
    console.log(a);
}

console.log(typeof fruits);
//Array is also a type of object


//Array methods

let num=[1,2,3,4,5,6];
let b=num.toString()//b is now a string
console.log(b);
console.log(typeof b);
console.log(b.length);

//join method
let c=num.join("_");//return string 
console.log(c);

//pop -> remove last element from the array
let r=num.pop();// returns popped element
console.log(num);

//push -> add element in the array at the back and returns new array length

let e=num.push(11);
console.log(num,e);

//shift -> removes first element and return it
let d=num.shift();
console.log(num,d);

//unshift -> add element at start and returns new array length
let f=num.unshift(56);
console.log(num,f);