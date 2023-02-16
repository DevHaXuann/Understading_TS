/**
 * Object Types
 * 1. Optional Properties
 * 2. Readonly Properties
 * 3. Index Signatures
 * 4. Extending Types
 * 5. Intersection Types
 * 6. Generic Object Types
 * 7. The Array Type
 * 8. The ReadonlyArray Type
 * 9. Tuple Types
 * 10. ReadOnly Type Types
 */


/**
 * Optional properties
 */
type Coordinate = {
    x: number;
    y?: number; // Optional Property
}

function printCoordinate(pt: Coordinate){
    console.log('The coordinate"s x value is '+pt.x);
    console.log('The coordinate"s y value is '+pt.y);
}
// === Không nên định nghĩa type của parameter theo cách này ===
// function printCoordinate(pt: {x: number, y: number}){
//     console.log('The coordinate"s x value is '+pt.x);
//     console.log('The coordinate"s y value is '+pt.y);
// }
printCoordinate({x: 5, y: 7})

/**
 * Readonly properties
 * - Việc sử dụng readonly không nhất thiết có nghĩa là 1 giá trị hoàn toàn không thay đổi
 * hay nói cách khác, không thể thay đổi nội dung bên trong của nó. Nó chỉ có nghĩa là bản thân thuộc tính không thể được re-written.
 */

interface SomeType {
    readonly prop: string
}

function doSomething(obj: SomeType){
    console.log(obj.prop);
    // obj.prop = "Name" // error: Cannot assign to 'prop' because it is a read-only property.
}

interface Home {
    readonly resident: {name: string, age: number};
}
function visitForBirthday(home: Home){
    //  can read and update properties from 'home.resident'.
    console.log("Happy Birthday"+home.resident.name);
    home.resident.age++;
}
function updateForBirthday(home: Home){
    // error: Cannot assign to 'resident' because it is a read-only property.
    // home.resident = {
    //     age: 12,
    //     name: "Name"
    // }
}

/**
 * Index Signatures
 * - Đôi khi, không biết trước tất cả các tên thuộc tính của 1 loại, nhưng biết hình dạng của các giá trị
 * - Trong trường hợp này, có thể sử dụng Index signature để mô tả các loại của giá trị có thể.
 */
interface IStringArray {
    [index: number]: string
}
function getStringArray(){
    return ["Name", "First", "Second"];
}
const myArray: IStringArray = getStringArray();
const secondItem = myArray[1];

interface NumberOrStringDictionary {
    [index: string]: number | string;
    length: number; // ok, length is a number
    name: string; // ok, name is a string
}

/**
 * Extending Types
 */
interface Address {
    name?: string;
    street: string;
    city: string;
    country: string;
    postalCode: string;
}
interface AddressWithUnit extends Address {
    unit: string;
}

interface Colorful {
    color: string;
}

interface Circle {
    radius: number;
}

interface ColorfulCircle extends Colorful, Circle {}

/**
 * Intersection Types
 * - Loại giao lộ được xác định bằng toán tử &
 */
interface IColor {
    color: string
}
interface ICircle {
    radius: number;
}
type ColorAndCircle = IColor & ICircle;

/**
 * Generic Object Types
 */
// Chúng tôi có thể sử dụng unknown, nhưng trong trường hợp đã biết loại nội dung, cần thực hiện kiểm tra hoặc sử dụng các xác nhận loại dễ bị lỗi.
interface IBox {
    contents: unknown
}
let x: IBox = {
    contents: "Hello World"
}
// check
if (typeof x.contents === "string"){
    console.log(x.contents.toUpperCase())
}
// hoặc sử dụng type assertion (type khẳng định)
(x.contents as string).toUpperCase();

// Cách giải quyết tốt hơn là khai báo generic
interface Box<Type>{
    contents: Type
}
const y: Box<number> = {
    contents: 25
}

interface Apple {
    //...
}
// same as {contents: Apple}
let apple: Box<Apple>;

function setContents<Type>(box: Box<Type>, newContents: Type){
    box.contents = newContents;
}

type TBox<Type> = {
    contents: Type
}

type OrNull<Type> = Type | null;
type OneOrMany<Type> = Type | Type[];
type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>
//===
// type OneOrManyOrNull<Type> = OneOrMany<Type> | null
type OneOrManyOrNullStrings = OneOrManyOrNull<string>
//===
// type OneOrManyOrNullStrings = OneOrMany<string> | null

/**
 * The Array Type
 */
interface IArray<Type> {
    length: number;
    pop(): Type | undefined;
    push(...items: Type[]): number;
}

/**
 * The ReadonlyArray Type
 */
// === readonly Type[]
function doStuff(values: ReadonlyArray<string>){
    // We can read from 'values'...
    const copy = values.slice();

    // ...but we can't mutate 'values'.
    // values.push("No")//error: Property 'push' does not exist on type 'readonly string[]'
}

/**
 * Tuple Types
 */
function readButtonInput1(name: string, version: number, ...input: boolean[]){}
//===
function readButtonInput(...args: [string, number, ...boolean[]]){
    const [name, version, ...input] = args;
}

/**
 * Readonly Tuple Types
 */
function doSomeThing(pair: readonly [string, number]){
    // pair[0] = "Hello!!" // error: Cannot assign to '0' because it is a read-only property.
}