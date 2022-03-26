function Logger(logString: string){
    console.log('LOGGER FACTORY');
    return function(contructor: Function){
    console.log(logString);
    console.log(contructor);
    }
}

@Logger('LOGGING-PERSOn')
class Person {
    name ='No Name';
    constructor(){
        console.log('Creating person object...');
    }
}
const person = new Person();
console.log(person);

//Building more useful decorators
function WithTemplate(templage: string, hookId: string) {
    console.log("Template FACTORY");
    return function(contructor: any){
        console.log("Redering template");
        const hookEl = document.getElementById(hookId);
        const p = new contructor();
        if (hookEl){
            hookEl.innerHTML = templage;
            hookEl.querySelector('h2')!.textContent = p.name;
        }
    }
}
@WithTemplate('<h2>My Person Object</h2>', 'app')
class Person1 {
    name ='No Name';
    constructor(){
        console.log('Creating person object...');
    }
}

//Diving to property Decorators.
function Log(target: any, propertyName: string | Symbol) {
    console.log('Property decorator');
    console.log(target, propertyName);
}
class Product1 {
    @Log
    title: string;
    private _price: number;
    setPrice(val: number){
        if (val > 0){
            this._price = val;
        }else {
            throw new Error('Invalid price - should be positive!');
        }
    }
    constructor(t: string, p: number){
        this.title = t;
        this._price = p;
    }
    getPriceWithTax(tax: number) {
        return this._price * (1 + tax);
    }
}

//Validation with Decorator
interface ValidatorConfig {
    [property: string]: {
        [validatableProp: string]: string[]; // ['require', 'positive']
    }
}
const registeredValidators: ValidatorConfig = {};
function Required(target: any, propName: string){
    registeredValidators[target.contructor.name]= {
        ... registeredValidators[target.contructor.name],
        [propName]: ['require']
    };
}
function PositiveNumber(target: any, propName: string){
    registeredValidators[target.contructor.name]= {
        ... registeredValidators[target.contructor.name],
        [propName]: ['positive']
    };
}
function validate(obj: any){
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig){
        return true;
    }
    let isValid = true;
    for (const prop in objValidatorConfig){
        for (const validator of objValidatorConfig[prop]){
            switch (validator){
                case 'require':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}

class Course {
    @Required
    title: string;
    @PositiveNumber
    number: number;
    constructor(t: string, n: number){
        this.title = t;
        this.number = n;
    }
}
const courseForm = document.querySelector('form')!;
courseForm.addEventListener('click', event => {
    event.preventDefault();
    const titleEl = document.getElementById('title') as HTMLInputElement;
    const priceEl = document.getElementById('price') as HTMLInputElement;
    const title = titleEl.value;
    const price = +priceEl.value;

    const createCourse = new Course(title, price);
    if (!validate(createCourse)){
        alert('Invalid input, please try again!');
        return;
    }
    console.log(createCourse);
})

// const registeredValidators: ValidatorConfig = {};
 
// function Required(target: any, propName: string) {
//     registeredValidators[target.constructor.name] = {
//         ...registeredValidators[target.constructor.name],
//         [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'required']
//     };
// }
 
// function PositiveNumber(target: any, propName: string) {
//     registeredValidators[target.constructor.name] = {
//         ...registeredValidators[target.constructor.name],
//         [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'positive']
//     };
// }