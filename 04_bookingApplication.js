/*
    4.	You are developing a booking application for a cinema.
    The ticket price depends on the type of the viewer ("child", "adult", or senior").
    Write a program which calculates the price accordingly and prints the total price to be paid.
    let's assume the ticket price for a child is Rs. 100, adult ticket price is Rs. 150 and ticket price for a senior is Rs. 120.

*/
let numberofchild=2;
let numberofAdult=1;
let numberofSenior=1;
let amountChild=100*numberofchild;
let amountAdult=150*numberofAdult;
let amountSenior=120*numberofSenior;
let total=amountChild+amountAdult+amountSenior
console.log("The totla ticket price is "+total);