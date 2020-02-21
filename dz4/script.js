// 1.
for (var i = 0; i < 10; i++) {
    console.log(i);
}

var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

for (var i = 1; i < 10; i++) {
    if (!(i % 2)) break; console.log(i);
}

var i = 1;
do {
    if (!(i % 2)) break; console.log(i); i++;
}
while (i < 10);

// 2.   
var x, random = parseInt(Math.random() * 10);
while (x = prompt("Enter number from 0 to 9:")) {
    if (Number.isNaN(x))
        alert("Enter number!");
    else if (x == random) {
        alert("Right!");
        break;
    }
}

// 3.
var n = +prompt("Number 1");
for (var i = 1; i <= 20; i++) {
    console.log(i * n);
}

var n = +prompt("Number 1");
i = 0;
do {
    i++; console.log(i * n);
}
while (i < 20);


var n = +prompt("Number 1");
for (var i = 1; i <= 100; i++) {
    if (i % n) continue; console.log(i);
}

var n = +prompt("Number 1");
i = 0;
do {
    i++; if (i % n) continue; console.log(i);
}
while (i < 100);

// 4.

var n = +prompt("Number 1");
x = +prompt("Number 2");
for (var i = 1; i <= x; i++) {
    console.log(i * n);
}

var n = +prompt("Number 1");
x = +prompt("Number 2");
i = 0;
do {
    i++; console.log(i * n);
}
while (i < x);

var n = +prompt("Number 1");
x = +prompt("Number 2");
for (var i = 1; i <= x; i++) {
    if (i % n) continue; console.log(i);
}

var n = +prompt("Number 1");
x = +prompt("Number 2");
i = 0;
do {
    i++; if (i % n) continue; console.log(i);
}
while (i < x);




