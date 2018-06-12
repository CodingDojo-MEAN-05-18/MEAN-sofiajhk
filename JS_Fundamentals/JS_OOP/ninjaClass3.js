// Part I:
// recreate Ninja class from scratch using ES6 classes
// your Ninja needs the following PUBLIC attributes (do not worry about private variables right now):
// name, health, speed, strength (speed and strength is 3 by default/ health is 100 by default)

// your Ninja needs the following methods:
// sayName() - log Ninja's name to console
// showStats() - show Ninja's name, strength, speed, health
// drinkSake() - add +10 health to Ninja

class Ninja{
    constructor(name){
        this.name = name;
        this.health =  100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(`My ninja name is ${this.name}.`);
    }

    showStats(){
        console.log(`Name: ${this.name} Speed: ${this.speed} Strength: ${this.strength} Health: ${this.health}`);
    }

    drinkSake(){
        this.health += 10;
        console.log(`${this.name} drank sake and gained 10 health!`);
        return this
    }
}

// Part II:
// extend Ninja class and create Sensei class
// Sensei class should have 200 Health, 10 Speed, 10 Strength by default
// create a new attribute called wisdom with default of 10
// add speakWisdom() method that calls drinkSake() method from Ninja class
// before console.logging a wise message!

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.speed = 10;
        this.strength = 10;
        this.health = 200;
        this.wisdom = 10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log(`Health is now ${this.health}.`)
        console.log("You will reap what you sow.");
    }
}

const ninja1 = new Ninja("Likito")
ninja1.drinkSake().showStats();

const sensei1 = new Sensei("Sensei Hakoko")
sensei1.speakWisdom();