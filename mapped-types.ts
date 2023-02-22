/**
 * Mapped Types
 * - Khi không muốn lặp lại chính mình, đôi khi 1 type cần dựa trên 1 type khác.
 * - Mapped types được xây dựng dựa trên cú pháp index signatures, được sử dụng để khai báo các type object chưa được khai báo trước.
 */

type THorse = {}
type OnlyBoolsAndHorses = {
    [key: string]: boolean | THorse
}
const conforms: OnlyBoolsAndHorses = {
    del: true,
    rodney: false
}

/**
 * 1 Mapped type là 1 generic type sử dụng kết hợp PropertyKey (thường được tạo thông qua keyof) để lặp qua các khóa để tạo 1 type.
 * Trong ví dụ dưới, OptionsFlags sẽ lấy tất cả các property từ loại Type và thay đổi giá trị của chúng thành boolean.
 */
type OptionsFlags<Type> = {
    [Property in keyof Type]: boolean;
}
type FeatureFlags = {
    darkMode: () => void;
    newUserProfile: () => void
}
type FeatureOptions = OptionsFlags<FeatureFlags>;

/**
 * Mapping modifiers
 * - Có 2 công cụ sửa đổi bổ sung có thể được áp dụng trong quá trình mapping:
 *  + readonly
 *  + ?
 * - Có thể loại bỏ hoặ thêm các công cụ sửa đổi này bằng cách thêm tiền tố (prefix) - hoặc + Nếu không có tiền tố (prefix) thì + được gỉa định.
 */


// Xóa thuộc tính readonly khỏi thuộc tính của 1 loại
type CreateMutable<Type> = {
    -readonly [Property in keyof Type]: Type[Property]
}
type LockedAccount = {
    readonly id: string;
    readonly name: string;
    readonly age: number;
}
type UnLockedAccount = CreateMutable<LockedAccount>;

// Xóa thuộc tính optinal khỏi thuộc tính của 1 loại
type Concrete<Type> = {
    [Property in keyof Type]-?: Type[Property]
}
type MaybeUser = {
    id: string;
    name?: string;
    age?: number;
};

type TUser = Concrete<MaybeUser>;


/**
 * Key Remapping via as
 */

type Getters<Type> = {
    [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
}
interface PersonCustom {
    name: string;
    age: number;
    location: string;
}
type LazyPerson = Getters<PersonCustom>;

/**
 * Có thể lọc ra (filter) các khóa bằng cách tạo never thông qua 1 loại điều kiện
 */

// Xóa thuộc tính "kind"
type RemoveKindField<Type> = {
    [Property in keyof Type as Exclude<Property, "kind">]: Type[Property]
}
interface Circle {
    kind: "circle";
    radius: number;
}
type KindLessCircle = RemoveKindField<Circle>;

type EventConfig<Events extends { kind: string }> = {
    [E in Events as E["kind"]]: (event: E) => void;
}

type SquareEvent = { kind: "square", x: number, y: number };
type CircleEvent = { kind: "circle", radius: number };

type Config = EventConfig<SquareEvent | CircleEvent>
//=
// type Config = {
//     square: (event: SquareEvent) => void;
//     circle: (event: CircleEvent) => void;
// }

/**
 * Further Exploration
 */
type ExtractPII<Type> = {
    [Property in keyof Type]: Type[Property] extends { pii: true } ? true : false;
};
type DBFields = {
    id: { format: "incrementing" };
    name: { type: string; pii: true };
};
type ObjectsNeedingGDPRDeletion = ExtractPII<DBFields>;
//=
// type ObjectsNeedingGDPRDeletion = {
//     id: false;
//     name: true;
// }