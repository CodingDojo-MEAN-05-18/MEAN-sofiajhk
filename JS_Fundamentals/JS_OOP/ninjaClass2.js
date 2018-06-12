// Complete the below challenges using Ninja from previous assignment

// challenge 1: .punch()
// add a new method to Ninja called .punch(). 
// this method will take another Ninja instance and subtract 5 health
// from the Ninja we passed in.

// challenge 2: .kick()
// add a new method to Ninja called .kick().
// this will subtract 15 Health for each point of Strength the calling Ninja has
// like punch, it will take another instance.

// validations: update .punch() and .kick() so they only accept instances of Ninja.
// Hint: You will need to find a way to check the constructor of an instance.

function Ninja(name){
    this.name = name;
    this.health = 100;
    // var makes speed and strength private because variable is only available in function scope, not global scope
    var speed = 3; 
    var strength = 3;

    this.sayName = function(){
        console.log("My ninja name is", this.name)
        return this;
    }

    this.showStats = function(){
        console.log("Name:", this.name, "Strength:", strength, "Speed:", speed, "Health:", this.health)
        return this;
    }

    this.punch = function(punchedNinja){
        // validating if punchedNinja is instance of Ninja constructor...
        if (punchedNinja instanceof Ninja){
            punchedNinja.health -= 5;
            console.log(this.name, "punched", punchedNinja.name, "and", punchedNinja.name, "lost 5 health!")
            return this;
        }
        else{
            console.log("You must punch a valid Ninja!")
        }
    }

    this.kick = function(kickedNinja){
        if (kickedNinja instanceof Ninja){
            var damage = strength * 15;
            kickedNinja.health -= damage;
            console.log(this.name, "kicked", kickedNinja.name, "and", kickedNinja.name, "lost", damage, "health!")
            return this;
        }
        else{
            console.log("You must kick a valid Ninja!")
        }
    }
}

// this function can also be written within Ninja constructor but for the sake of practicing use of prototype...
Ninja.prototype.drinkSake = function(){
    this.health += 10;
    console.log("You drank sake. Your health is now", this.health, ".")
    return this;
}

var ninja1 = new Ninja("Hakoke");
var ninja2 = new Ninja("Emera");
var ninja3 = "Devon";

ninja1.sayName();
// terminal: "My ninja name is Hakoke"
ninja2.sayName();
// terminal: "My ninja name is Emera"


ninja1.punch(ninja2);
// terminal: "Hakoke punched Emera and Emera lost 5 health!"
ninja2.kick(ninja1);
// terminal: "Emera kicked Hakoke and Hakoke lost 45 health!"


ninja1.showStats();
// terminal: "Name: Hakoke Strength: 3 Speed: 3 Health: 55"
ninja2.showStats();
// terminal: "Name: Emera Strength: 3 Speed: 3 Health: 95"


ninja1.punch(ninja3);
// terminal: "You must punch a valid Ninja!"