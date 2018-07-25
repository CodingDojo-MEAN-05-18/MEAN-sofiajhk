// Given the code below, re-write it using all TypeScript features you have learned

// myNum = 5;
const myNum: number = 5; 
// Note: var, let and const are all appropriate to use in these examples that are not defined within block and/or function scopes

// myString = "Hello Universe";
var myString: string = "Hello Universe";

// myArr = [1,2,3,4];
const myArr: Array<number> = [1,2,3,4];
// OR 
// const myArr: number[] = [1,2,3,4];

// myObj = { name:'Bill'};
let myObj: { [key: string]: (string | number) } = { name: "Bill" };

// anythingVariable = "Hey";
let anythingVariable: any = "Hey";
// any allows you to assign any type, and change to anytype, anytime
// so you cannot use const because then you can't change the value!

// anythingVariable = 25; 
// since already assigned a type above...
anythingVariable = 25; 

// arrayOne = [true, false, true, true]; 
let arrayOne: boolean[] = [true, false, true, true];

// arrayTwo = [1, 'abc', true, 2];
let arrayTwo: (string | number | boolean)[] = [1, 'abc', true, 2];

// myObj = { x: 5, y: 10 };
// since myObj was defined earlier, you can modify it (since we didn't use const)
myObj = { x: 5, y: 10 };
// must still follow the type rules defined above! (key must be string and value must be string or number!)


// // OBJECT CONSTRUCTOR
// MyNode = (function () {
//     function MyNode(val) {
//         this.val = 0;
//         this.val = val;
//     }
//     MyNode.prototype.doSomething = function () {
//         this._priv = 10;
//     };
//     return MyNode;
// }());
class MyNode{
    private _priv: number;

    constructor(public val: number){

    }

    doSomething(): void{
        this._priv = 10;
    }
}

// myNodeInstance = new MyNode(1);
const myNodeInstance = new MyNode(1);

// console.log(myNodeInstance.val);
console.log(myNodeInstance.val);


// function myFunction() {
//     console.log("Hello World");
//     return;
// }
function myFunction(): void{
    console.log("Hello World");
    return;
}
// function that does not return anything!


// function sendingErrors() {
// 	throw new Error('Error message');
// }
function sendingErrors(): never{
    throw new Error("Error message");
}
// function that will not return anything because it throws error!
