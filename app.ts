/**
 * Important: Type Casing
 *  - It is string and number (etc), NOT String, Number etc.
 *  - The core primitive types in JavaScript are all lowercase!
*/

function add(n1: number, n2: number, showResult: boolean, phrase: string){
    // if (typeof n1 !== 'number' || typeof n2 !== 'number'){
    //     throw new Error('Incorrect input!')
    // }
    let result: number = n1 + n2;
    if (showResult){
        console.log(phrase + result);
    } else{
        return result;
    }
}

console.log(add(10, 20, true, 'Result is: '));
