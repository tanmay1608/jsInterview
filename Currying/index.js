
//there are two ways to do currying
//using bind method;

function add(x,y,z){
    console.log(x+y+z);
}



const myAdd=add.bind(this,2);
myAdd(3,4);


//using closures
function add(x){
    return function(y){
        return function(z){
            console.log(x+y+z);
        }
    }
}

add(4)(2)();


//sum(1)(2)(3)(4)(5).....()

// function sum(x){
//     return function(y){
//         return function(z){
//             return function(a){
//                 return function(b){
//                     console.log(a+b+x+y+z);
//                 }
//             }
//         }
//     }
// }

let sumVal=sum(1)(2)(3)(4)()(5);
console.log(sumVal);

function sum(x){
    return function(y){
        if(y){
            return sum(x+y);
        }
        else{
            return x;
        }
        
    }
}





