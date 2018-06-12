// create a new object contructor (class) called Ninja with the following attributes:
// name, health, speed (private), strength(private)
// speed and strength should be 3 by default. health should be 100 by default.

// Ninja should have following methods:
// sayName() - log Ninja's name to the console
// showStats() - show Ninja's name, strength speed and health
// drinkSake() - add +10 Health to Ninja

function Ninja(name){
    this.name = name;
    this.health = 100;
    // var make speed and strength private because variable is only available in function scope, not global scope
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
}

// this function can also be written within Ninja constructor but for the sake of practicing use of prototype...
Ninja.prototype.drinkSake = function(){
    this.health += 10;
    console.log("You drank sake. Your health is now", this.health, ".")
    return this;
}

var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
// terminal: "My ninja name is Hyabusa"
ninja1.showStats();
// teminal: "Name: Hyabusa Strength: 3 Speed: 3 Health: 100"
ninja1.drinkSake();
// terminal: "You drank sake. Your health is now 110 ."
ninja1.showStats();
// terminal: "Name: Hyabusa Strength: 3 Speed: 3 Health: 110"