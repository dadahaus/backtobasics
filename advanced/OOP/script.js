console.log('hello')

// class Animal{
//     constructor(name,age,farmName){
//         this.name = name
//         this.age = age
//         this.farmName = farmName
//     }
//     speak(){
//         console.log(`${this.name} makes a sound`)
//     }
// }

// class Dog extends Animal {
//     constructor(name,age,farmName,breed){
//         super(name, age,farmName)
//         // this.name = name
//         this.breed = breed

//     }
// }

// let simba = new Dog('simba','shepherd')

class Animal {
    constructor(name) {
        this._name = name
    }
    get name(){
        return this._name
    }
    speak() {
        console.log(`${this._name} makes a sound`)
    }
}

class Dog extends Animal{
    constructor(name,breed){
        super(name)
        this._breed = breed
    }
    get breed(){
        return this._breed 
    }
    speak(){
        super.speak()
        console.log(`${this.name} barks`)
    }
}

class Cat extends Animal {
    constructor(name, breed) {
        super(name)
        this._breed = breed
    }
    get breed() {
        return this._breed
    }
    speak() {
        super.speak()
        console.log(`${this.name} meows`)
    }
}

// let simba = new Animal('simba')
let simba = new Dog('simba', 'terrier')
let machi = new Dog('thamachine', 'pitbull')
let purr = new Cat('mishyy', 'nicey')

let farm = [simba, machi, purr]
for (a of farm) {
    a.speak()
}


class Contractor {
    constructor(name, role) {
        this._name = name
        this._role = role
    }
    get name() {
        return this._name
    }
    get role() {
        return this._role
    }
    sayHello() {
        console.log(`hi there buckos and I am as a ${this._name}`)
    }
}

class Backend extends Contractor {
    constructor(name, role, tech) {
        super(name, role)
        this._tech = tech

        get tech() {
            return this._tech
        }
        sayHello() {
            console.log(`hello, i am on the ${this._role} team at and I use ${this._tech}`)
        }
    }
}

let bob = new Contractor('Bob', 'front-end')
let wachoo = new Backend('simba', 'font-end')
