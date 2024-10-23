let str="Tanmay";
console.log(str.length);


//Template Literals
//uses back ticks instead of quotes to define a string
//Inside template literals it is poosible to use both single quotes and double quotes
//we can insert varibale directly in template literal. This is called string interpolation
// let a =`${name}`;
let firstName="Tanmay";
let lastName="Barjatya";
let fullName=`${firstName} ${lastName}`;
console.log(fullName);

//Escape Sequence Characters
let fruit='Bana\'na'; //agar single quotes string k andar single quotes use krna h then use escape characters
console.log(fruit.length);// length is 7 as \ and ' together considered as single character

//String replace

let naam="tanmay Barjatya";
let newname=naam.replace("Barjatya","Kumar Barjatya");
console.log(newname);

//String concat
console.log(naam.concat("is a friend of ",newname));

//trim
let name1="     Tanmay    ";
console.log(name1.trim());

//********
//Strings are immutable