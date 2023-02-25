/**
 * Union Type
 * 1. Khai báo 1 union type
 * 2. Làm việc với union type
 */

// Khai báo union type
function printId(id: number | string){
    console.log(`Your ID is: ${id}`);
}

// Cách làm việc với union type
function printIDSecondary(id: number | string){
    if (typeof id === "string") {
        console.log(id.toUpperCase())
    }else {
        console.log(id);
    }
}
function welcomePeople(people: string[] | string){
    if (Array.isArray(people)){
        console.log(people.join(" and "));
    }else {
        console.log(people);
    }
}


