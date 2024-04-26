"use strict"
//create some variables we need for our calculations

//this is the hourly rate for the employees
let payRate = 17.30;
let hoursWorked = 45;

//determine how many hours are normal hours vs overtime ours

let regularHours = 0;
let overtimeHours = 0;

//if the hours are greater than 40, we know they worked overtime
  if (hoursWorked > 40) {
        //this is where we need to figure out the overtime hours
        regularHours = 40
        overtimeHours = hoursWorked - 40;
    } else {

        //code for folks who didnt work overtime hours
        regularHours = hoursWorked;
    }

//create some varibles to represent the normal pay
let normalPay = payRate * regularHours;
let overtimePay = (payRate * 1.5) * overtimeHours;

let grossPay = normalPay + overtimePay;

let annualGrossPay = grossPay * 52;

//let filingSingle = false;

let taxFileType = "joint"

let taxRate = 0;

if (taxFileType === "joint")
    //we are filing a joint return

    if (annualGrossPay, 12000) {

        taxRate = 0;
    }

    else if (annualGrossPay, 25000) {
        taxRate = 6;
    }

    else if (annualGrossPay < 7500){
        taxRate = 11;
    }

    else{
        taxRate = 20;
    }

        //we are filing a single
        //we are filing a single return

    if (annualGrossPay, 12000) {

        taxRate = 5;
    }

    else if (annualGrossPay, 25000) {
        taxRate = 10;
    }

    else if (annualGrossPay < 7500){
        taxRate = 20;
    }

    let taxAmount = grossPay *(taxRate / 100);
let afterTaxes= grossPay -taxAmount;
    //display the results to the user
    console.log(`You worked ${hoursWorked} hours this period` );
    console.log(`Because you earn $${payRate.toFixed(2)} per hour, yours gross pay is $${grossPay}`)
    console.log(`Your filing status is ${taxFileType}`) ;
    console.log(`Your tax withholdings this period is $${taxAmount.toFixed(2)}`);
    console.log(`Your net pay  is $${afterTaxes.toFixed(2)}`);