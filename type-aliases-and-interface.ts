/**
 * 1. Type Aliases
 * 2. Interface
 * 3. Differences Between Type Aliases and Interface
 *      - Type Aliases và interface rất giống nhau và trong nhiều trường hợp, bạn có thể tự do lựa chọn giữa chúng.
 *      - Hầu như tất cả các tính năng của interface đều có sẵn trong type
 *      - Điểm khác biệt chính là type không thể được re-opened (mở lại) để thêm property mới so với interface luôn có thể extend (mở rộng).
 *    Xem ví dụ bên dưới phần về sự khác biệt Type Aliases và Interface.
 */

// khai báo 1 type aliases
type TPoint = {
    x: number;
    y: number;
}
type ID = number | string;

// Khai báo 1 interface
interface IPoint {
    x: number;
    y: number;
}

// Sự khác biệt giữa Type Aliases và Interface.
// 1. Extending an Interface
interface IAnimal {
    name: string;
}
interface IBear extends IAnimal {
    honey: boolean;
}
// 2. Extending 1 type thông qua intersections (giao lộ)
type TAnimal = {
    name: string;
}
type TBear = TAnimal & {
    honey: boolean
}

// 3. Add new fields vào 1 interface đã tồn tại
interface IMammal {
    title: string;
}
interface IMammal {
    breed?: string;
}
const animal: IMammal = {
    title: 'Animal',
    breed: 'Any'
}
// 4. A type cannot be changed after being created (Type không thể thay đổi sau khi tạo);
// type Reptile = {
//     title: string;
// }
// Error: Duplicate identifier 'Reptile'.
// type Reptile = {
//     breed?: string;
// }
