
var yearOfBirth=+prompt("Enter year of birth");
currentYear = new Date();
year = currentYear.getFullYear();
age = year - yearOfBirth;
if ( Number.isNaN(yearOfBirth) ){
alert("This is not a number");
}
if (age >= 18) {
alert('Access');
}
else {
var result=age<12?alert('Go away'):alert('No access');
}

var age=+prompt("Enter your age");
experience=+prompt("Enter your work experience"); 
if ( Number.isNaN(age) || Number.isNaN(experience)){
alert("This is not a number");
}
if (age>30 && experience>3) {
alert('You suit us');
}