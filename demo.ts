import {RandomClass} from "./rando"

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

let s2: number; //strongly typed to number 
s2 = 7;
s2 = 5;
// s2 = "5";

let s3: number | boolean | string;
s3 = 4;
s3 = true;
s3 = "Another string";
// s3 = [];

let v1: null = null;
let v2: void = null;
let v3: null = undefined;
let v4: undefined = null;
// let v5: undefined = void; 
// let v6: void = void;


//Java code
// declare a variable to be of type arry that contain strings
// String[] a;

//-------Array--------
let array1: string[];
array1 = ["one","two", "three"];

let array2: Array<number>;
array2 = [1,2,3];

//-------Tuples-------
// immutable (fixed size and datatypes are ordered in the array)
let tupleArray : [string, boolean, number];
tupleArray = ["string value here", true, 0];
tupleArray = ["string value here", true, 12];

//-------Enums----------
// An enumeration is a collection of consants, Representational values

enum carStates {OFF = 0, IDLE = 1, STOPLIGHT = 27, ACCEL = -10};

let myCar;

if(myCar == carStates.ACCEL){
    //car acceleration logic 
}

//-----functions--------

//basically JS
function myFunc1(a,b,c){
    //function logic 
};

function myFunc2(a:number| boolean, b:string){
// a can be number or a boolean value 
// b can be a string 
// This function does not specify a return type 

    return "stuff" + a + b;
}

function myFinalFunc(): number | string {
    // return 4;
    return "4";

    //can retrun either number or string 
}

function myFinalFinalFunc(): void {
    // return type void, only used with a function expression
}

//------interfaces-------
//shared functionality, but not delving into the details of the structure. i.e. it's implementation. 

interface Moon{
    name: string;
}

interface Planet{
    name: string;
    hasRings: boolean;
    moons:  Array<string>;
    orbit(): void;
}

let pluto: Planet;
pluto = {'name':'Pluto', 'hasRings':false, 'moons': ['Hydrax', 'Nix'],
        'orbit': () => console.log("I'm orbitting!")
    };

class Star implements Moon {

    public name: string; //accessible anywhere
    protected size: number; //accessible internally or any class that extends it
    private planets: number; //accessible only inside our class 

    //When we don't use an access modifier, it deafults to public

    constructor(name: string, size: number, planets: number){
        this.name = name;
        this.size = size;
        this.planets = planets;
    }

    fusion(name: string): void {
        console.log(this.name + " this is my object's name");
        console.log(name + " this is the argument that was passed in");
    }
}

let Sun: Star = new Star("The Sun",1,8);
// Sun.fusion("my variable");

class NeurtronStar extends Star{

    //does not force you to implement all the previous variables
    public hasExploded: boolean;

    constructor(name: string, size: number, planets: number, hasExploded: boolean){
        super(name,size, planets);
        this.hasExploded = hasExploded;
    }

    fusion(): void{
        console.log("go boom");
        this.hasExploded = true;
    }

    goBig(): string {
        return "go big or go home";
    }


}

let pulsar: Star = new NeurtronStar("pulsar", 2, 4,false);

interface A{} //marker interfaces 

interface B{
    singleMethod(): void;
}

class Animal implements A, B{



    singleMethod() {

    }

    // private name: string;
    // private age: number;
    // private breed: string;

    // constructor(name: string, age: number, breed: string){
    //     this.name = name;
    //     this.age = age;
    //     this.breed = breed;
    // }

    constructor(private name: string, private age?: number, private breed?: string){
        //When you specify the access modifier in the arguemnts, it will automatically assigin it as a state of the class. 
        // "?" decide whether a variable is optional 
    }

    get Name(): string{
        return this.name;
    }

    set Name(name: string){
        console.log("Inside setter")
        this.name = name;
    }

    myMethodHere(){

    }

}

let dog: Animal = new Animal("Bob",6);



// dog.Name = "Alfonso"; //setter 
console.log(dog.Name); //getter
