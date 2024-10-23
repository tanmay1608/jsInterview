const radius=[3,1,2,4];

//in this approach we are dividing the responsibilty.
const area=(radius)=>{
    return Math.PI*radius*radius;;
}
const circumference=(radius)=>{
    return Math.PI.radius*2;
}

const diameter=(radius)=>{
    return 2*radius;
}

const calculate=(radius,logic)=>{
    const output=[];

    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]));
    }

    return output;

}

console.log(calculate(radius,diameter));


//Find sum from arr
const arr=[5,1,3,2,4];

function findSum(){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}

console.log(findSum(arr));

//using reduce
const output=arr.reduce((acc,curr)=>{

    acc=acc+curr;
    return acc;

},0)
console.log(output);

//find max
const max=arr.reduce((acc,curr)=> {
    acc=Math.max(acc,curr);
    return acc;
},-1)

console.log(max);


//list of full names
const users = [
    { firstName: "Akshay", lastName: "Saini", age: 26 },
    { firstName: "Tanmay", lastName: "Barjatya", age: 24 },
    { firstName: "Priya", lastName: "Sharma", age: 29 },
    { firstName: "Rahul", lastName: "Verma", age: 30 },
    { firstName: "Neha", lastName: "Patel", age: 27 }
];

const listOfFullNames=users.map((user)=>{
    return `${user.firstName} ${user.lastName}`;
});
console.log(listOfFullNames);

const listOfFullNames2=users.reduce((acc,curr)=>{
    acc.push(`${curr.lastName} ${curr.lastName}`);
    return acc;
},[]);

console.log(listOfFullNames2);

//find frequency of each age inside an object

const ansOutput=users.reduce((acc,curr)=>{

    if(acc[curr.age]){
        acc[curr.age]=acc[curr.age]+1;
    }
    else{
        acc[curr.age]=1;
    }

    return acc;

},{});

console.log(ansOutput);


var check="check";

function check(){
    console.log("Hello");
}



console.log(typeof check);
