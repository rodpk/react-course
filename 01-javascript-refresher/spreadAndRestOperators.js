// spread
const oldArray = [1, 2, 3]
const newArray = [...oldArray, 4, 5, 6]

console.log(newArray);

const person = {
    name: 'Rodrigo'
}

const newPerson = {
    ...person,
    age: 32
}

console.log(newPerson)

//rest 

function sortArgs(...args) {
    return args.sort();
}


const filter = (...args) => {
    return args.filter(el => el === 1);
}

console.log(filter(1, 2, 3, 'rodrigo', 1))

