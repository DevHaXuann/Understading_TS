/**
 * Generics
 * 1. Hello world of generics
 * 2. Working with generic type variables
 * 3. Generic types
 * 4. Generic classes
 * 5. Generic Constraints (Hạn chế)
 * 6. Using Type Parameters in Generic Constraints
 */


/**
 * Hello world of generics
 */
function identity<Type>(arg: Type): Type {
    return arg;
}
// ===
const identityArrow = <Type>(arg: Type): Type => {
    return arg;
}
let output = identity<string>("Neil");

/**
 * Working with generic type variables
 */
function loggingIdentity<Type>(args: Type[]): Type[] {
    console.log(args.length);
    return args;
}
// ===
function loggingIdentity2<Type>(args: Array<Type>): Array<Type> {
    console.log(args.length)
    return args;
}
// ===
const loggingIdentityArrow = <Type>(args: Array<Type>):Array<Type> => {
    console.log(args.length);
    return args;
}


/**
 * Generic types
 */
function identityFn<Type>(arg: Type):Type{
    return arg;
}

const identityOutput: <Input>(arg: Input) => Input = identityFn;
// ===
const identityOutput2: {<Type>(arg: Type): Type} = identityFn;
// ===
interface IIdentity {
    <Type>(arg: Type): Type
}
const identityOutput3: IIdentity = identity;
// ===
interface IGenericIdentityFn<Type>{
    (arg: Type): Type
}
const identityOutput4: IGenericIdentityFn<number> = identity;


/**
 * Generic classes
 */
class GenericNumber<NumType> {
    zeroValue?: NumType;
    add?: (x: NumType, y: NumType) => NumType
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y){
    return x + y;
}

let myGenericString = new GenericNumber<string>();
myGenericString.zeroValue = "Hello";
myGenericString.add = function (x, y){
    return x + y;
}
let result = myGenericString.add(myGenericString.zeroValue, "World");


/**
 * Generic constraints
 */

function loggingIdentityConstraint<Type extends {length: number}>(arg: Type): Type{
    console.log(arg.length);
    return arg;
}
// loggingIdentityConstraint(5); //error Argument of type 'number' is not assignable to parameter of type '{ length: number; }'.
loggingIdentityConstraint({value: 5, length: 10});

/**
 * Using Type Parameters in Generic Constraints
 */

function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key): Type[Key]{
    return obj[key];
}
const personInfo = {
    name: "Neil",
    age: 20,
    address: "Ha Noi"
}
getProperty(personInfo, "name"); //Neil
// getProperty(personInfo, "add"); // error: Argument of type '"add"' is not assignable to parameter of type '"name" | "age" | "address"'

//Creating a Generic Function
function merge<T extends object,U extends object>(objA: T, objB: U){
    return Object.assign(objA, objB);
}
const mergeObj = merge({name: 'No Name', hobbies: ["chess", "game"]}, {age: 20});


//the "keyof" Constraint
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U){
    return obj[key]
}
extractAndConvert({name: "No Name", age: 20}, "age");

// Generic Classed
class DataStorage<T extends number | string | boolean> {
    private data: T[] = [];
    addItem(item: T){
        this.data.push(item);
    }
    removeItem(item: T){
        if(this.data.indexOf(item) === -1){
            return;
        }
        this.data.splice(this.data.indexOf(item), 1)
    }
    getItems(){
        return [...this.data]
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('No Name');
textStorage.getItems();
textStorage.removeItem("No Name");

const numStorage = new DataStorage<number>();
// const objStorage = new DataStorage<object>();
// const maxObj = {name: 'No Name', age: 20}
// objStorage.addItem(maxObj);
// objStorage.removeItem(maxObj);

//Generic utility Types
interface CourseGoal {
    title: string;
    description: string;
    date: Date;
}
function createCourseGoal(title: string, description: string, date: Date): CourseGoal{
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.date = date
    return courseGoal as CourseGoal;
}

const listName: Readonly<string[]> = ['Max', 'No Name'];
// listName.push('No1'); //Error
