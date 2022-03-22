/**
 * 1. unknown
 * 2. never
 */
let userInput: unknown;
let userName: string;

//1
userInput = 5;
userInput = 'No Name';

// console.log(userInput);

// userName = userInput; // Error

if (typeof userInput === 'string') {
    console.log(userName = userInput);
}

//2
function generateError(message: string, code: number): never{
    throw {message, errorCode: code}
}
generateError('An error occurred!', 500);