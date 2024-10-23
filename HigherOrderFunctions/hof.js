function x(){
    console.log("inside x");
}

function y(x){
    x();
}

y(x);

//calculate area of 4 circles
const radius=[3,1,2,4];

function areaOfCircle(radius){
    const resArr=[];
    for(let i=0;i<radius.length;i++){
        const area=Math.PI*radius[i]*radius[i];
        resArr.push(area);
    }

    return resArr;
}

const ans=areaOfCircle(radius);
console.log(ans);

//calcualte circumference
const circumference=(radius)=>{
    const output=[];
    for(let i=0;i<radius.length;i++){
        const circumference=Math.PI*radius[i]*2;
        output.push(circumference);
    }

    return output;
}

console.log(circumference(radius));

//so there are problems in this code as we are repeating so much

