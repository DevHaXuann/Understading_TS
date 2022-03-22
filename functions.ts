/**
 * 1. Function return types & "void"
 * 2. Function types & Callbacks 
 * 3. Fuction & types
 */

// 1.
function add(n1: number, n2: number){
    return n1 + n2;
};
// console.log(add(10,  12));//22

// function printResult(num: number): undefined{
//     console.log('Result: ' + num);
//     return;
// }

function printResult(num: number){
    console.log('Result: ' + num);
    
}
// console.log(printResult(add(20, 15))); 

//2.
function addAndHandle(n1: number, n2: number, cb: (num: number) => void){
    let result = n1 + n2;
    cb(result);
}

console.log(addAndHandle(19, 20, (result)=> console.log(result)));
