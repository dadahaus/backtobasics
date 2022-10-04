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

// let simba = new Animal('simba')
let simba = new Dog('simba', 'terrier')