/**
 * Indexed Access Types
 */

type TPerson = { age: number, name: string, alive: boolean};

type Age = TPerson["age"];
type AgeAndName = TPerson["age" | "name"];
type All = TPerson[keyof TPerson];
type OmitAge = TPerson[keyof Omit<TPerson, "age">];

const MyArray = [
    { name: "Alice", age: 15 },
    { name: "Bob", age: 23 },
    { name: "Eve", age: 38 },
];
type Person2 = typeof MyArray[number]; // matching index signature for type number
type Age2 = typeof MyArray[number]["age"];

/**
 * không thể tạo const để tham chiếu biến
 * tuy nhiên, có thể sử dụng type alias
 */
// const key = "age";
// type Age3 = Person[key];

type key = "age";
type Age4 = Person[key];