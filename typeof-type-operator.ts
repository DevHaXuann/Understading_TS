/**
 * Typeof type operator
 */

let s = "Hello";
let n: typeof s;

type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>;

/**
 * Note: Khi sử dụng ReturnType trên name function, sẽ có error
 */
function f(){
    return {x: 10, y: 5};
}
// type F = ReturnType<f>; //error: 'f' refers to a value, but is being used as a type here. Did you mean 'typeof f'?
type F = ReturnType<typeof f>; // return {x:number, y: number}

