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