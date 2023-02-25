/**
 * Khi tạo 1 biến, có 2 cách chính trong Typescript để gán type.
 * 1. Explicit (Rõ rằng, tường minh)
 *    vd: let firstName: string = 'Neil';
 * 2. Implicit (Ngầm định)
 *    vd: let lastName = 'Neil';
 * Implicit type thường ngắn gọn, gõ nhanh hơn và thường được sử dụng khi developing và testing.
 */


/**
 * 1. TypeScript có các kiểu nguyên thủy (primitive-type) tương ứng 8 build-in types in JavaScript
 *      - number
 *      - string
 *      - bigInt
 *      - boolean
 *      - symbol
 *      - null
 *      - undefined
 *      - object
 * 2. Các loại TypeScript quan trọng khác:
 *      - unknown: loại hàng đầu
 *      - never: loại dưới dùng
 *      - object literal: eg {property: Type}
 *      - void: 1 kiểu con của undefined được sử dụng làm kiểu trả về
 *      - T[]: mutable array, === Array<T>
 *      - [T,T]: tuples(bộ dữ liệu), có độ dài có địng (fixed-length) nhưng có thể thay đổi.
 *      - (t: T) => U: functions
 */

// ví dụ function:
const fst: (a: any, b: any) => any = (a, b) => a;
// chính xác hơn
const fstSecondary: <T, U>(a: T, b: U) => T = (a, b) => a;


// TypeParameters
function liftArray<T>(t: T): Array<T>{
    return [t];
}