let kobj = {};

let me = {
    name: {
        firstname: 'mouad',
        lastname: 'nassri'
    },
    age: 24,
    intro() {
        console.log(`Hello, my name is ${this.name.firstname} ${this.name.lastname}, I'm ${this.age} years old, and I'm not happy.`);
    }
}

me.job = 'web dev';
me.displayJob = () => {
    console.log(`I'm a ${me.job}`);
}
me['country'] = 'Morocco';

// Object literals are limited when we need to create a lot of object

function meFactory(name, age) {
    return {
        name: name,
        age, age,
        intro() {
            console.log(`Hello, my name is ${name.firstname} ${name.lastname}, I'm ${age} years old, and I'm not happy.`);
        }
    }
}

let meF = meFactory({ firstname: 'mouad', lastname: 'nassri' }, 24);

// Using objects using constructor

function Me(name, age) {
    this.name = name;
    this.age = age;
    this.intro = function() {
        console.log(`Hello, my name is ${name}, I'm ${age} years old, and I'm not happy.`);
    }
}

let constructorMe = new Me({ firstname: 'mouad', lastname: 'nassri' }, 24);
constructorMe.intro();

// Shadowing

constructorMe.intro = function() {
    console.log('shadowed intro method');
};

// Prototype
Me.prototype.hello = function() {
    console.log('hello function ttached to prototype instead of directly to Me construct object');
}

constructorMe.intro();

class Product {
    name;
    price;

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    details() {
        console.log(`This is a ${this.name} and its price is : ${this.price}`);
    }
}

let phone = new Product('IPhone', 399);
phone.details();

class Thing {
    weight;
    #prvt;

    delete() {
        console.log('deleting current thing..');
    }
}

class Door extends Thing {
    #color;
    dimensions;

    constructor(color, dimensions) {
        super();

        this.#color = color;
        this.dimensions = dimensions;
    }

    // Polymorphism
    delete() {
        console.log('Door way of deleting..');
    }
}

let door = new Door('black', [100, 150]);
console.log(door.color); // undefined because color is private
