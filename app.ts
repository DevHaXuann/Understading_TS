interface Person {
    name: string;
    age: number;
    greet(pharse: string): void;
}
let user: Person;

user = {
    name: "No Name",
    age: 20,
    greet(pharse: string){
        console.log(`${pharse} ${this.name}`);
    }
}


// interface with class
interface Greetable {
    name: string;
    age: number;
    greet(pharse: string): void;
}

class NoPerson implements Greetable {
    name: string;
    age: number;

    constructor(n: string, age: number){
        this.name = n;
        this.age = age;
    }
    greet(pharse: string): void {
        console.log(`${pharse} ${this.name}`);
        
    }
}
let user1: Greetable;
user1 = new NoPerson('No Name', 20);
console.log(user1.greet('I am '));
console.log(user1.age);

// interface as Function Types.
// type AddFn = (a: number, b: number) => number;
// interface AddFn {
//     (a: number, b: number): number;
// }
// let add: AddFn;
// add = (n1: number, n2: number) => {
//     return n1 + n2;
// };