const names: Array<string> = []; // string[]

const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(()=> resolve("No Name"), 1000)
})

//Creating a Generic Function
function merge<T extends object,U extends object>(objA: T, objB: U){
    return Object.assign(objA, objB);
}
const mergeObj = merge({name: 'No Name', hobies: ["chess", "game"]}, {age: 20});

//Another Generic Function
interface Lengthy {
    length: number;
}
function countAndDescribe<T extends Lengthy>(element: T): [T, string]{
    let descriptionText = "Go no value.";
    if (element.length === 1){
        descriptionText = "Go 1 value";
    } else if (element.length > 1) {
        descriptionText = `Go ${element.length} element.`
    }
    return [element, descriptionText]
}
console.log(countAndDescribe([5, "NO Name"]));

//the "keyof" Constraint
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U){
    return obj[key]
}
extractAndConvert({name: "No Name", age: 20}, "age");

// Generic Classed
class DataStorage<T extends number | string | boolean> {
    private data: T[] = [];
    addItem(item: T){
        this.data.push(item);
    }
    removeItem(item: T){
        if(this.data.indexOf(item) === -1){
            return;
        }
        this.data.splice(this.data.indexOf(item), 1)
    }
    getItems(){
        return [...this.data]
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('No Name');
textStorage.getItems();
textStorage.removeItem("No Name");

const numStorage = new DataStorage<number>();
// const objStorage = new DataStorage<object>();
// const maxObj = {name: 'No Name', age: 20}
// objStorage.addItem(maxObj);
// objStorage.removeItem(maxObj);

//Generic utility Types
interface CourseGoal {
    title: string;
    description: string;
    date: Date;
}
function createCourseGoal(title: string, description: string, date: Date): CourseGoal{
    let sourseGoal: Partial<CourseGoal> = {};
    sourseGoal.title = title;
    sourseGoal.description = description;
    sourseGoal.date = date
    return sourseGoal as CourseGoal;
}

const listName: Readonly<string[]> = ['Max', 'No Name'];
// listName.push('No1'); //Error

//Generic Types vs Union Types
