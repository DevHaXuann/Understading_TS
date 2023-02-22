/**
 * Keyof Type Operator
 */

/**
 * keyof operator sẽ lấy 1 object type và tạo ra 1 liên kết string hoặc number của keys của nó.
 * ví dụ: type P sau đây cùng loại với "x" | "y".
 */

type KeyofTypePoint = {x: number, y: string};
type P = keyof KeyofTypePoint;// type P = "x" | "y"

/**
 * Nếu type có index signature string hoặc số, keyof sẽ return về các loại đó
 */
type Arrayish = { [n: number]: string};
type A = keyof Arrayish; // type A = number

/**
 * Note: trong ví dụ này, M là 1 string | number, điều này là do các keys object luôn bị ép thành 1 string, vì vậy
 * obj[0] luôn giống với obj["0"]
 */
type Mapish = { [n: string]: boolean};
type M = keyof Mapish; // type M = string | number

