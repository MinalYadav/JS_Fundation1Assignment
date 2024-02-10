/*
    6.	You are developing a form validation system. 
    Write a program that takes user information(such as name, email, age) and 
    uses the typeof operator to check the data type of each input.
    Print appropriate messages like "Name should be a string," "Email should be a string," or
     "Age should be a number." if any field is not proper.
*/

// let userName = prompt("Please enter your name:");
// console.log("Hello, " + userName + "!");

let username="Mithun";
let email= "mithun@gmail.com";
let age= "21";

if (typeof(username)!=typeof("")) {
    console.log("name should be in string");   
}
 if (typeof(email)!=typeof("")) {
    console.log("email should be in string");
 }

 if (typeof(age)!=typeof(23)) {
    console.log("age should be in number");
 }

// if (typeof(username)!=typeof("") || typeof(email)!=typeof("")) {
//      console.log("name should be in string");   
//     }


/*
    @@@@@@@@@@$$$$$$$$$^^^^^^^^^^^^^^Why does my variable show it's deprecated?^^^^^^^^^^^^^$$$$$$$$$$$$$$@@@@@@@@@@@@@@
    let name = 'Mark';
    name = 5;
    console.log(name);//it is deprecated

    ------>>>>>>>Resion=======>>>>>>

    In a browser, the global name variable has special meaning. This has caused people a lot of confusion over the years 
    as they tried to create their own global variable named name and then found it coerced into a string.

    The checker you are using doesn't appear able to special case an assignment to name if it follows a declaration of let name.

    You can see that the message goes away if you put the code inside a function.

    function xyz() {
    let name="meenal";
    console.log(name);//local is fine
    
    }
    let name ="Usa";
    console.log(name);//top level triggers the deprecated warning

*/
