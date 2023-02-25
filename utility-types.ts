/**
 * - Utility Types
 * 1. Awaited<Type>
 * 2. Partial<Type>
 * 3. Required<Type>
 * 4. Readonly<Type>
 * 5. Record<Keys, Type>
 * 6. Pick<Type, Keys>
 * 7. Omit<Type, Keys>
 * 8. Exclude<UnionType, ExcludedMembers>
 * 9. Extract<Type, Union>
 */

/**
 * 1. Awaited<Type>
 *    - Loại này dùng để mô hình hóa các hoạt động như await in async functions, then() method in Promises
 */
type A1 = Awaited<Promise<string>>; //= string
type B1 = Awaited<Promise<Promise<number>>>; //= number
type C1 = Awaited<boolean | Promise<number>>; //= boolean | number

/**
 * 2. Partial
 *  - Constructs 1 type với tất cả property của Type được đặt thành optional.
 */
interface ITodo {
    id: number,
    title: string,
    description: string
}

declare type TPartial<Type> = { // === Partial
    [Property in keyof Type]?: Type[Property]
}
function updateTodo(todo: ITodo, fieldsToUpdate: Partial<ITodo>){
    return {...todo,...fieldsToUpdate}
}
const todoTest = {
    id: 1,
    title: "title",
    description: "description"
}
const todoUpdate = updateTodo(todoTest, {title: "Update Title"});

/**
 * 3. Required
 *  - Constructs 1 type với tất cả các thuộc tính của Type được đặt thành required.
 */
declare type TRequired<Type> = {  // === Required
    [Property in keyof Type]-?: Type[Property]
}
interface Props {
    a?: number,
    b?: number,
    c: number
}
const obj: Props = {c: 1};
const requiredObj: TRequired<Props> = {a: 1, b: 1, c: 1};

/**
 * 4. Readonly
 * - Constructs 1 type với tất cả thuộc tính của Type được đặt thành readonly
 */
declare type TReadonly<Type> = { // === Readonly
    readonly [Property in keyof Type]: Type[Property]
}
const readonlyTodo: TReadonly<ITodo> = {
    id: 1,
    title: "Title",
    description: "Description"
}

/**
 * 5. Record
 * - Constructs 1 type object có keys là Keys và có value là Type.
 */
interface CatInfo {
    age: number,
    breed: string
}
type CatName = "nick" | "neil" | "name";
declare type TRecord<Keys extends keyof any, Type> = { // === Record
    [Key in Keys]: Type
}
const cats: TRecord<CatName, CatInfo> = {
    nick: {age: 10, breed: "Test"},
    neil: {age: 20, breed: "Test"},
    name: {age: 30, breed: "Test"}
}
cats.nick

/**
 * Pick
 * - Constructs 1 type bằng cách chọn (pick) tập hợp các property Keys từ Type
 */
interface Todo {
    title: string;
    description: string;
    completed: boolean;
}
declare type TPick<Type, Keys extends keyof Type> = { // === Pick
   [Key in Keys]: Type[Key]
}
type ToDoPreview = TPick<Todo, "title" | "description">;
const todoPre: ToDoPreview = {
    title: "Title",
    description: "Description"
}

/**
 * Omit
 * - Constructs 1 type bằng cách chọn tât cả các property từ Type và sau đó loại Keys.
 */
// Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>
declare type TExclude<UnionType, ExcludedMembers> = UnionType extends ExcludedMembers ? never : UnionType
declare type TOmit<Type, Keys extends keyof any> = { // = Omit
    [Key in TExclude<keyof Type, Keys>]: Type[Key]
}
interface Todo {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
}

type TodoPreview = TOmit<Todo, "description">;

const todo: TodoPreview = {
    title: "Clean room",
    completed: false,
    createdAt: 1615544252770,
};

/**
 * Exclude
 * - Constructs 1 type bằng cách loại trừ khỏi UnionType tất cả các union thành viên có thể được gán ExcludedMembers.
 *  Hiểu đơn giản: Loại trừ khỏi T những type có thể gán cho U.
 */
type T0 = TExclude<"a" | "b" | "c", "a">;
type T1 = Exclude<string | number | (() => void), Function>;

/**
 * Extract
 * - Constructs 1 type bằng cách trích xuất từ Type tât cả union thành viên có thể gán cho Union
 */
declare type TExtract<Type, Union> = Type extends Union ? Type : never;
type T2 = TExtract<"a" | "b" | "c", "a">;
type T3 = TExtract<string | number | (() => void), Function>;

/**
 * NonNullable<Type>
 * - Constructs 1 type loại trừ null và undefined từ Type
 */
declare type TNonNullable<Type> = Type & {};
type notNull = NonNullable<string | boolean | undefined>
type T4 = NonNullable<string[] | null | undefined>;
