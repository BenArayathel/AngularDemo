// Compiling? Translated code into machine code. 
//Transpiling? Is when you convert code into other code with similar levels of abstraction.
//  We're are going to transpile .ts into .js 
/**
 * What re the datatypes in typescript?
 * number, string, boolean, null, undefined, object, fcuntion, array, bigInt
 * void, enum, any, tuple, symbol
 */
console.log("We're in typescript!");
var x = "hello!";
// x=5;
console.log(x);
let s1; //the type is any
s1 = 5;
s1 = "string";
s1 = true;
let s2; //strongly typed to number 
s2 = 7;
s2 = 5;
// s2 = "5";
let s3;
s3 = 4;
s3 = true;
s3 = "Another string";
// s3 = [];
let v1 = null;
let v2 = null;
let v3 = undefined;
let v4 = null;
// let v5: undefined = void; 
// let v6: void = void;
//Java code
// declare a variable to be of type arry that contain strings
// String[] a;
//-------Array--------
let array1;
array1 = ["one", "two", "three"];
let array2;
array2 = [1, 2, 3];
//-------Tuples-------
// immutable (fixed size and datatypes are ordered in the array)
let tupleArray;
tupleArray = ["string value here", true, 0];
tupleArray = ["string value here", true, 12];
//-------Enums----------
// An enumeration is a collection of consants, Representational values
var carStates;
(function (carStates) {
    carStates[carStates["OFF"] = 0] = "OFF";
    carStates[carStates["IDLE"] = 1] = "IDLE";
    carStates[carStates["STOPLIGHT"] = 27] = "STOPLIGHT";
    carStates[carStates["ACCEL"] = -10] = "ACCEL";
})(carStates || (carStates = {}));
;
let myCar;
if (myCar == carStates.ACCEL) {
    //car acceleration logic 
}
//-----functions--------
//basically JS
function myFunc1(a, b, c) {
    //function logic 
}
;
function myFunc2(a, b) {
    // a can be number or a boolean value 
    // b can be a string 
    // This function does not specify a return type 
    return "stuff" + a + b;
}
function myFinalFunc() {
    // return 4;
    return "4";
    //can retrun either number or string 
}
function myFinalFinalFunc() {
    // return type void, only used with a function expression
}
let pluto;
pluto = { 'name': 'Pluto', 'hasRings': false, 'moons': ['Hydrax', 'Nix'],
    'orbit': () => console.log("I'm orbitting!")
};
class Star {
    //When we don't use an access modifier, it deafults to public
    constructor(name, size, planets) {
        this.name = name;
        this.size = size;
        this.planets = planets;
    }
    fusion(name) {
        console.log(this.name + " this is my object's name");
        console.log(name + " this is the argument that was passed in");
    }
}
let Sun = new Star("The Sun", 1, 8);
// Sun.fusion("my variable");
class NeurtronStar extends Star {
    constructor(name, size, planets, hasExploded) {
        super(name, size, planets);
        this.hasExploded = hasExploded;
    }
    fusion() {
        console.log("go boom");
        this.hasExploded = true;
    }
    goBig() {
        return "go big or go home";
    }
}
let pulsar = new NeurtronStar("pulsar", 2, 4, false);
class Animal {
    // private name: string;
    // private age: number;
    // private breed: string;
    // constructor(name: string, age: number, breed: string){
    //     this.name = name;
    //     this.age = age;
    //     this.breed = breed;
    // }
    constructor(name, age, breed) {
        this.name = name;
        this.age = age;
        this.breed = breed;
        //When you specify the access modifier in the arguemnts, it will automatically assigin it as a state of the class. 
        // "?" decide whether a variable is optional 
    }
    singleMethod() {
    }
    get Name() {
        return this.name;
    }
    set Name(name) {
        console.log("Inside setter");
        this.name = name;
    }
    myMethodHere() {
    }
}
let dog = new Animal();
// dog.Name = "Alfonso"; //setter 
console.log(dog.Name); //getter
