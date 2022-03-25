type Admin  = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

// interface ElevatedEmployee extends  Admin , Employee {};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'No Name',
    privileges: ['No', 'Name'],
    startDate: new Date,
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;
function add(a: Combinable, b: Combinable) { // function 1.
    if (typeof a === "string" || typeof b === "string"){
        return a.toString() + b.toString;
    }
    return a + b;
}

type UnknownEmployee = Employee | Admin;
function printEmployeeInformation (emp: UnknownEmployee){
    console.log('Name: ' + emp.name);
    if ('privileges' in emp){
        console.log("Privileges: "+ emp.privileges);
    }
    if ('startDate' in emp){
        console.log("StartDate: "+emp.startDate);
    }
}

//Discriminated Unions
interface Bird {
    type: 'bird';
    flyingSpeed: number;
}
interface Horse {
    type: 'horse';
    runningSpeed: number;
}
type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    switch (animal.type){
        case "bird": 
            console.log("flyingSpeed: " + animal.flyingSpeed);
            break;
        case "horse":
            console.log("RunningSpeed" + animal.runningSpeed);
            break;    
    }
}

// type Casting
// const userInputElement = <HTMLInputElement>document.getElementById("user_input");
//==
// const userInputElement = document.getElementById("user_input") as HTMLInputElement;
//===
const userInputElement = document.getElementById("user_id");
(userInputElement as HTMLInputElement).value = "No Name";

//Index Properties
interface ErrorContainer { //{email: 'Not a valid email, username: 'Must start 6 charater}
    [prop: string]: string;
}
const errorBag: ErrorContainer = {
    email: 'Not a valid email',
    username: 'Must a start witch a capital character'
}

//Function Overloads
function add(a: number, b: number): number; // function 2
function add(a: string, b: string): string; // function 3
function add(a: number, b: string): string; // function 4
function add(a: string, b: number): string; // function 5
console.log(add(5, 4));
console.log(add("No", 25));
console.log(add(25, "No Name"));