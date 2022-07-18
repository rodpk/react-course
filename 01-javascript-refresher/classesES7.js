class Human {
    gender = 'male'

    printGender = () => {
        console.log(this.gender);
    }

}

class Person extends Human {
    name = 'Rodrigo';
    gender = 'male'

    print = ()  => {
        console.log(this.name);
    }
}

const person = new Person();

person.print();
person.printGender();