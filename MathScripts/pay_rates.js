// helps give errors related to our code

"use strict"


//create some variables we need for our calculations

//this is the hourly rate for the employees
let payRate = 12.50;
let hoursWorked= 20;

//determine how many hours are normal hours vs overtime ours

let regularHours= 0;
let overtimeHours= 0;

//if the hours are greater than 40, we know they worked overtime
if(hoursWorked > 40)

if (hoursWorked> 40){
    //this is where we need to figure out the overtime hours
    regularHours= 40
    overtimeHours= hoursWorked - 40;
}else{

    //code for folks who didnt work overtime hours
    regularHours=hoursWorked;
}

//create some varibles to represent the normal pay
let normalPay = payRate * regularHours;
let overtimePay = (payRate * 1.5) * overtimeHours;

let grossPay= normalPay + overtimePay;
//display the results to the user
console.log(" I got paid $" + normalPay.toFixed(2) + "for my regular hours");
console.log("I got paid $" + overtimePay.toFixed (2) + "for my overtime hours");
console.log("I got paid $" + grossPay.toFixed (2) + "for my gross pay");