
console.group('User Info');
console.log('name: John');
console.log('job: Accountant');

console.group('Address');
console.log('Street: 15 Jason Street');
console.log('City: New York');
console.log('State: CA');
console.groupEnd();

console.groupEnd();

var users = {
First: { name: "John", adress: "15 Jason Street" },
Second: { name: "Jane", adress: "15 Jason Street" }
};

console.table(users);


console.count('Jane')
console.count('Jane')
console.count('John')


console.log('%c Error ', 'color: black; background-color: red; font-size: 20px', 'Error');


console.time("click time");
alert("Click me");
console.timeEnd("click time");
