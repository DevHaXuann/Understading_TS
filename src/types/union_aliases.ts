/**
 * 1. Union types
 * 2. Literal types
 * 3. Type Aliases/Custom types.
 * 4. Type Aliases & Object types.
 * */
import { ConditionalExpression } from "typescript";

 

//1
function combine(input1: number | string, input2: number| string){
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number'){
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
// console.log(combine(10, 21));
// console.log(combine('Max', 21));

//2.
function combine2(
    input1: number | string, 
    input2: number | string, 
    resultConversion: 'as-number' | 'as-string'){
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number'){
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
console.log(combine2(10, 20, 'as-number'));
console.log(combine2("20", "30", 'as-number'));
console.log(combine2("No Name", "....", 'as-string'));

//3
type Combinable = number | string;
type ConversionDescription = 'as-number' | 'as-string';

function combine3(
    input1: Combinable, 
    input2: Combinable, 
    resultConversion: ConversionDescription
){
    //logic
}

//4
type User = {
    name: string;
    age: number;
}
function greet(user: User) {
    console.log('Hi, I am ' + user.name);
    
}
function isOlder(user: User, checkAge: number){
    return checkAge > user.age;
}

//5
declare function pad(s: string, n: number, direction: "left" | "right"): string;
pad('No Name', 21, 'left');
let s = "right";
// pad("No Name", 20, s);//Error
let s1: "left" | "right" = "right";
pad('No Name',25, s1);

//Contextual typing: Ts ưu tiên khai báo với array trước
declare function map<T, U> (ts: T[], f: (t: T)=> U): U[];
let sns = map([1,2,3], (number)=> number.toString());

declare function run<T> (thunk: (t: T) => void): T;
let i: {inference: string} = run((o) => {
    o.inference = 'Insert state here';
})

//Discriminated Unions
type Shape = 
    | {kind: 'circle'; radius: number}
    | {kind: 'square'; x: number}
    | {kind: 'triangle'; x: number; y: number}

function area(s: Shape){
    if (s.kind === 'circle') {
        return Math.PI * s.radius * s.radius;
    } else if (s.kind === 'square') {
        return s.x * s.x;
    } else {
        return (s.x * s.x) / 2;
    }
}