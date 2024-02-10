/*
    1.	Suppose you are building a payment checkout page and must display the final price after the discount.
    Create a simple discount calculator that takes two values from the variables — 
    the total cost and the discount percentage - and prints the discounted value.
*/
// console.log("total amount is ${totalValue}")
// console.log("discount parcentage ${discountPercentage}");
// ye print nhi kerega variable ki value ko

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ What i learn ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
/*
    + ka use varibal ki amount ko show krne ke liye kra h isse hum 2 string ko concat bhi kr sakte h
 */ 


let totalValue=2000;
let discountPercentage=20;
console.log(" total amount is " + totalValue);
console.log(" discount percentage " + discountPercentage);
let disAmount= (totalValue * discountPercentage) /100;
let finalAmount = totalValue-disAmount;
console.log("The final price after discount is :" + finalAmount); 