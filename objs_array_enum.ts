
type Persion = {
    name: string,
    age: number,
    role: [1, 'author']
}
const persion: Persion = {
    name: 'No Name',
    age: 21,
    role: [1, 'author']
}
// console.log(persion);
// === (k nên viết theo cách này)
// const persion : {
//     name: string,
//     age: number,
// } = {
//     name: 'No Name',
//     age: 21,
// };

//Nested Object & Types
type Product = {
    id: string;
    price: number;
    tags: string[];
    hobbies: string[],
    details: {
        title: string;
        description: string;
    }
}
const product: Product = {
    id: '12345',
    price: 20000,
    tags: ['Takasi', 'No Name'],
    hobbies: ['Sports', 'Cooking'],
    details: {
        title: 'Ha Xuan',
        description: 'Ha Noi, Viet Nam'
    }
}
// console.log(product);

//Tuple type
type InFor = {
    name: string,
    age: number,
    role: [number, string]
}
const infor: InFor = {
    name: 'No Name',
    age: 21,
    role: [1, 'author']
}
// console.log(persion);

// enum type
enum Role {
    ADMIN = 0,
    USER,
    AUTHOR = "AUTHOR",
}

const listInfo = {
    name: 'No Name',
    adreess: 'Ha Noi',
    role: Role.ADMIN,
}
let isRole = listInfo.role === Role.ADMIN ? 'isAdmin' : 'isUser'
console.log(isRole);

//enum type
let number1: any;       
