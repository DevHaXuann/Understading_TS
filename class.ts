class Department {
    name: string;
    age: number;
    private employees: string[] = [];
    readonly isAuthor?: string;

    constructor(name: string, age: number, isAuthor?: string){
        this.name = name;
        this.age = age;
        this.isAuthor = isAuthor;
    }
    description(this: Department){
        console.log("Name: ", this.name);
    }

    addEmployee(employee: string){
        this.employees.push(employee);
    }

}
const accounting = new Department("No Name", 21);
console.log(accounting);

accounting.description(); // No Name

const accountingCopy = {name: "Ha Xuan" ,describe: accounting.description};
accounting.description();//Ha Xuan
