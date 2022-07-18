
const person = {
    name: 'Rodrigo'
};

const secondPerson = person; // referencia
const thirdPerson  = {
    ...person
};

person.name = 'Abcd';

console.log(secondPerson);
console.log(thirdPerson)