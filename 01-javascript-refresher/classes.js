class Human {
    constructor() {
        this.gender = 'male';
        console.log('Human initialized');
    }

    printGender() {
        console.log(this.gender);
    }
}

class Person extends Human {

    constructor() {
        super();
        this.name = 'Rodrigo';
        console.log('Person initialized')
    }

    print() {
        console.log(this.name);
    }
}

const person = new Person();

person.print();
person.printGender();