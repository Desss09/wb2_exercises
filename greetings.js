"use strict"
//create a varible for the current hour
let currentHour = 20;
let greeting = ""
//create an if/else if statment to figure out our greeting
//before 10am; good morning; after 10am but before 5: good afternoon, after 5: good evening

if( currentHour <= 10){
greeting = "Good morning!";

}
else if(currentHour >= 10 && currentHour < 17){
greeting = "Good afternoon!";

}else{
greeting = "Good evening!";

}

//display the results in the console
console.log(greeting);