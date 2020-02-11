var x=1;
y=3;
z=5;
console.log((x+y+z)/3);

// 1.2.
function av(x,y,z) {
    console.log((x+y+z)/3);
}
av(1,3,5);

// 1.3.
var arr = [1,3,5];
function arrayAv(array){
    var sum = 0;
    for(var i = 0; i < array.length; i++){
        sum += array[i];
        }
console.log(sum/array.length);
}
arrayAv(arr);


// 2.1.
  var x = prompt("Number 1");
  var y = prompt("Number 2");
  var z = prompt("Number 3"); 
  console.log((parseInt(x)+parseInt(y)+parseInt(z))/3);

// 2.2.
  var x = +prompt("Number 1");
  var y = +prompt("Number 2");
  var z = +prompt("Number 3"); 
  console.log((x+y+z)/3);


// 3.1.
var input = prompt('Three Numbers');
var array = input.split(',');
var x = array[0];
var y = array[1];
var z = array [2];
console.log((parseInt(x)+parseInt(y)+parseInt(z))/3);

// 3.2.
var input = prompt('Three Numbers');
var array = input.split(',');
var x = +array[0];
var y = +array[1];
var z = +array [2];
console.log((x+y+z)/3);

// 4.
var x = prompt("Number 1");
    y = prompt("Number 2");
console.log(x === y);
console.log(typeof x === typeof y );

// 5.
 var x, random =  parseInt (Math.random() * 10);
 while (x = prompt("Enter number from 0 to 9:")) {
     if (isNaN(x))
     alert("Enter number!");
     else if (x == random) {
     alert("Right!");
     break;
     }
     }