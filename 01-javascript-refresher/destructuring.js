// array destructuring

[a, b] = ['Hello, ', 'Rodrigo']
console.log(a);
console.log(b);

const numbers = [1, 2, 3];
[num1, , num3] = numbers;
console.log(num1, num3);

// object destructuring
// {name} = { name: 'Rodrigo', age: 21 }
// console.log(name)