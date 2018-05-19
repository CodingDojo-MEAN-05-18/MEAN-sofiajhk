// rewrite the code the way it would be seen by the interpreter 
// and predict the output!

// #1: GIVEN
// console.log(hello);                                   
// var hello = 'world';

// AFTER HOISTING
var hello;
console.log(hello); // logs undefined
hello = 'world';

// #2: GIVEN
// var needle = 'haystack';
// test();
// function test(){
// 	var needle = 'magnet';
// 	console.log(needle);
// }

// AFTER HOISTING
var needle;
function test(){
    var needle;
    var needle = 'magnet';
    console.log(needle);
}
needle = 'haystack' // will NOT log haystack since console.log was not called outside of function
test(); // logs magnet


// #3: GIVEN
// var brendan = 'super cool';
// function print(){
// 	brendan = 'only okay';
// 	console.log(brendan);
// }
// console.log(brendan);

// AFTER HOISTING
var brendan;
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
brendan = 'super cool';
console.log(brendan); // logs 'super cool' b/c we are logging in global scope, not function scope

// #4: GIVEN
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
// 	food = 'half-chicken';
// 	console.log(food);
// 	var food = 'gone';
// }

// AFTER HOISTING
var food;
function eat(){
    var food;
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}
food = 'chicken';
console.log(food); // logs 'chicken'
eat(); // logs 'half-chicken' NOT 'gone' b/c '= gone' assignment stays put when code is rearranged 

// #5: GIVEN
// mean();
// console.log(food);
// var mean = function() {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// console.log(food);

// AFTER HOISTING
var mean;
mean(); // logs error because we tried to invoke it before a function was assigned to it
console.log(food);
// function was NOT hoisted because it was '=' assignment so it stays put when code is rearaanged
function mean(){
    var food;
    food = 'chicken';
    console.log(food);
    food = 'fish';
    console.log(food);
}
console.log(food);


// #6: GIVEN
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
// 	genre = "rock";
// 	console.log(genre);
// 	var genre = "r&b";
// 	console.log(genre);
// }
// console.log(genre);

// AFTER HOISTING
var genre;
function rewind(){
    var genre;
    genre = 'rock';
    console.log(genre);
    genre = 'r&b';
    console.log(genre);
}
console.log(genre); // logs undefined because var genre was declared but no variable assigned yet
genre = 'disco'; 
rewind(); // logs 'rock' then 'r&b'
console.log(genre); // logs 'disco'

// #7: GIVEN
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
// 	dojo = "seattle";
// 	console.log(dojo);
// 	var dojo = "burbank";
// 	console.log(dojo);
// }
// console.log(dojo);

// AFTER HOISTING
function learn(){
    var dojo;
    dojo = 'seattle';
    console.log(dojo);
    dojo = 'burbank';
    console.log(dojo);
}
dojo = 'san jose';
console.log(dojo); // logs 'san jose'
learn(); // logs 'seattle' then 'burbank'
console.log(dojo); // logs 'san jose'

// #8 (BONUS ES6: const)
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//         const dojo = {};
//         dojo.name = name;
//         dojo.students = students;
//         if(dojo.students > 50){
//             dojo.hiring = true;
//         }
//         else if(dojo.students <= 0){
//             dojo = "closed for now";
//         }
//         return dojo;
// }

// AFTER HOISTING
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.sutdents > 50){
        dojo.hiring = true;
    }
    else if (dojo.sutdents <= 0){
        dojo = 'closed for now';
    }
    return dojo;
};
console.log(makeDojo('Chicago', 65)); // logs {name: 'chicago', students: 65, hiring: true}
console.log(makeDojo('Berkeley', 0)); // logs {name: 'Berkeley', students: 0}