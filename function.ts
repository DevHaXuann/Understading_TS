/**
 * 1. Parameter Type Annotations (Loại tham số chú thích)
 * 2. Return Type Annotations (chú thích type trả về)
 * 3. Anonymous Functions
 * 4. Call Signatures
 * 5. Generic Functions
 * 6. Inference (suy luận)
 * 7. Constraints (hạn chế)
 * 8. Specifying Type Arguments (Chỉ định loại đối số)
 * 9. Guidelines for Writing Good Generic Functions
 *  - Quy tắc: Khi có thể, hãy sử dụng chính tham số type thay vì hạn chế (constraint) nó.
 *  - Quy tắc: Nếu 1 thông số loại chỉ xuất hiện ở 1 vị trí, hãy xem xét lại nếu bạn thực sự cần nó.
 * 10. Optional Parameters in Callbacks
 * 11. Function Overloads
 * 12. Other Types to Know About
 * 13. Rest Parameters and Arguments
 * 14. Parameter Destructuring
 *
 */


/**
 * Parameter Type Annotations
 */
function greet(name: string){
    console.log(`Hello ${name.toUpperCase()}!!`);
}
function greeter(fn: (name: string) => void){
    fn("Hello World");
}
//=====
// type GreeterFunction = (name: string)=> void;
// function greeter(fn: GreeterFunction){
//     fn("Hello World")
// }
greeter(greet);

/**
 * Return Type Annotations
 */
function getFavoriteNumber(): number {
    return 10;
}

/**
 * Anonymous functions
 */
const arrayName = ["Alice", "Neil", "Name"];
arrayName.forEach(function (name){
        console.log(name.toUpperCase())
    }
)

/**
 * Call Signatures
 */
type DescriptionFn = {
    description: string;
    (someArg: number): boolean
}
function doSomething(fn: DescriptionFn){
    console.log(fn.description + fn(5))
}

/**
 * Generic Functions
 */
// function firstElement(arr: any){
//     return arr[0];
// }
//===
function firstElement<Type>(arr: Type[]): Type | undefined {
    return arr[0]
}

const u = firstElement([1, 3, 5]);// return number | undefined
const a = firstElement(["a", "b", "c"]);// return string | undefined
const b = firstElement([]); // return undefined

/**
 * Inference
 */
function customMap<Input, Output>(arr: Input[], fn: (arg: Input)=> Output): Output[]{
    return arr.map(fn);
}
const parsed = customMap(["1", "2", "3"], (num)=> parseInt(num));

/**
 * Constraints
 */
function longest<Type extends {length: number}>(a: Type, b: Type): Type{
    if (a.length >= b.length){
        return a;
    }
    return b;
}
// longerArray is of type 'number[]'
const longerArray = longest([1, 2], [1, 2, 3]);
// longerString is of type 'alice' | 'bob'
const longerString = longest("alice", "bob");
// Error! Numbers don't have a 'leng
// const notOK = longest(10, 100);

/**
 * Specifying Type Arguments
 */
const combine = <Type>(arr1: Type[], arr2: Type[]): Type[] => {
    return arr1.concat(arr2);
}
// const array = combine([1, 2, 3], ["a", "b"]);// error Type 'string' is not assignable to type 'number'
const array = combine<number | string>([1, 2, 3], ["a"]);

/**
 * Guidelines for Writing Good Generic Functions
 *  1. Sử dụng ít tham số loại (constraint) nhất có thể
 *  2. Luôn luôn sử dụng càng ít tham ố loại càng tốt.
 *  3. Nếu một thông số loại chỉ xuất hiện ở một vị trí, hãy xem xét lại nếu bạn thực sự cần nó
 */
// 1. Sử dụng ít tham số loại (constraint) nhất có thể
function firstElement1<Type>(arr: Type[]): Type {
    return arr[0];
}
function firstElement2<Type extends any[]>(arr: Type) {
    return arr[0];
}
// firstNumbers: number (good)
const firstNumbers = firstElement1([1, 2, 3]);
// firstFruits: any (bad)
const firstFruits = firstElement2(["apple", "orange", "banana"]);

// 2. Luôn luôn sử dụng càng ít tham ố loại càng tốt.
function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[]{
    return arr.filter(func);
}
function filter2<Type, Func extends (arg: Type) => boolean>(arr:Type[],func: Func): Type[]{
    return arr.filter(func);
}

// 3. Nếu một thông số loại chỉ xuất hiện ở một vị trí, hãy xem xét lại nếu bạn thực sự cần nó
function greet2<Str extends string>(str: Str){ // bad
    console.log(str);
}
function greet3(str: string){ // good
    console.log(str);
}

/**
 * Optional Parameters in Callbacks
 */
function myForEach<Type>(arr: Type[], callback: (arg: Type, index?: number) => void): void{
    for (let i = 0; i <= arr.length; i++){
        callback(arr[i], i);
    }
}

/**
 * Function Overloads
 */
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number):Date {
    if (d !== undefined && y !== undefined){
        return new Date(y, mOrTimestamp, d);
    }else {
        return new Date(mOrTimestamp);
    }
}
const date1 = makeDate(12345678);
const date2 = makeDate(5, 5, 5,);
const date3= makeDate(1234567, 5, 5);

/**
 * Other Types to Know About
 * 1. void
 * 2. object
 * 3. unknown
 * 4. never
 * 5. Functon
 */

// 1. void
// void đại diện cho giá trị trả về của các hàm không trả về giá trị
// Trong JS, 1 hàm khô trả về bất kỳ giá trị nào sẽ ngầm hiểu là trả về giá trị undefined.
// Tuy nhiên, void và undefined không giống nhau ở trong TypeScript
function noop(){// inferred return type is void
 return;
}

// 4. never
// một function không bao giờ trả về giá trị
function fail(message: string): never {
    throw new Error(message);
}
function fn(x: string | number){
    if (typeof x === "string"){
        // do something
    }else if (typeof x === "number"){
        // do something else
    }else {
        x;
    }
}

// 5.Function
function doSomething2(f: Function){
    return f(1, 2, 3);
}

/**
 * Rest Parameters and Arguments
 */
// 1. Rest Parameters
function multiply(n: number, ...m: number[]): number[]{
    return m.map((x)=> x * n);
}
multiply(10, 1, 2, 3, 4); // [10, 20, 30, 40]

// 2. Rest Arguments
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1.push(...arr2);

// TypeScript không cho array là bất biến (immutable).
// const args = [5, 8];
// const angle = Math.atan2(...args)// error: A spread argument must either have a tuple type or be passed to a rest parameter.

// đơn giản nhất là sử dụng const
const arg = [5, 8] as const;
const angle2 = Math.atan2(...arg);

/**
 * Parameter Destructuring
 */

function sumABC({a, b, c}: {a: number, b: number, c: number}){
    return a + b + c;
}
