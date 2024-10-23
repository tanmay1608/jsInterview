// /*This is object listeral: basic unit
// const user={}
// */

// const user={
//     username:"Tanmay",
//     loginCount:8,
//     signedIn:true,
//     check:function(){
//         console.log(this);
//     }
// }

// console.log(user.check());
// //  console.log(user["username"]);
// //  console.log(user.username);


function User(userName,age){
    this.userName=userName;
    this.age=age;
    console.log(this);
    //return this;
}
const user1=User("hello","dd");
//console.log(user1);
