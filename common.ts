/**
 * Lợi ích chính của TypeScript là nó có thể làm nổi bật các hành vi không mong muốn trong mã của bạn,
 * giảm nguy cơ xuất hiện lỗi.
 *  1. Types by inference (Types bởi suy luận).
 *  2. Defining Types (Khai báo Types).
 * Typescript bao gồm các primities types Javascript: boolean, number, string, symbol, bigInt, null and undefined.
 * Mở rộng 1 số kiểu: any(allow anything), unknown(sử dụng phải khai báo kiểu), never and void(1 function sẽ return undefined or không có giá trị trả về).
 *  3. Composing Types.
 *    - Với Typescript bạn có thể tạo các kiểu phức tạp bằng cách kết hợp các kiểu đơn giản.
 *    - Có 2 cách phổ biến để tạo: with unions, and generics
 *  4. Structural Type System.
 *    - 1 trong những nguyên tắc cốt lõi của TypeScript là việc kiểm tra kiểu tập trung vào shape (hình dạng) 
 *      mà các giá trị có. -> Điều này đôi khi được gọi "duck typing" or "structural typing"
 */

//1. Types by inference.
let fullName = 'No Name'; // -> string

//2. Defining Types.
    //eg 1.
let nickName: string = 'Ha Xuan';
    //eg 2.
interface User {
    id: number;
    name: string;
}
const userInfo: User = {
    id: 1,
    name: 'No Name',
}
    //eg 3. interface with classes.
interface PersonInfo {
    id: number;
    name: string;
}
class UserAccount {
    id: number;
    name: string;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}
const userAccount: UserAccount = new UserAccount(3, 'No Name');
    //eg 4. interface to annotate parameters and return values to functions (sử dụng interface để chú thích các tham số và trả về giá trị cho function).
function getAdminUser (user: User): User {
   let result =  user.id + user.name;
   return {id: 1, name: result};
}
function deleteAdminUser (user: User) {
    // do something
}

//3. Composing Types
// 3.1: Unions
type MyBool = true | false;
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen  = 1 | 3 | 5| 7 | 9;
function getLength(obj: string | string[]) {
    if (typeof obj === 'string'){
        return [obj]
    }
        return obj;
}
//3.2 Generics
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{name: string}>;

interface BackType<T>{
    add: (name: T) => void;
    get: () => T;
}
declare const backType: BackType<string>;
const object = backType.add('No Name');
backType.get();

//4. Structural Type System.
interface Point {
    x: number;
    y: number;
};
function logPoint(point: Point){
    console.log(`${point.x}, ${point.y}`);
}
logPoint({x: 10, y: 25}); // 10, 25
const point = {x: 10, y: 30, z: 50};
logPoint(point); // 10, 30