// Answer: 1

const multiplyValue = (num1 : number, num2 : number = 2) => {
    console.log(num1 * num2) 
}

multiplyValue(10);
multiplyValue(10, 5);
multiplyValue(7, 0);


// Answer: 2

const processInput = (value : string | number | boolean) => {
    if(typeof value == 'string'){
        let txt : string = value.trim()
        return txt.toLowerCase()
    } 
    else if (typeof value == "number"){
        return value * 10
    }
    else{
        if(value == true)
            return "Active"
        else
            return "Inactive"
    }
}

console.log(processInput("  TypeScript  "))
console.log(processInput(7))
console.log(processInput(true))
console.log(processInput(false))


// Answer: 3

const formatCoordinate = (value : [number, number, string]) => {
    const [latitude, longitude, locationName] = value;
    return `Location: ${locationName}, ${latitude}, ${longitude}`
}

console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));


// Answer: 4

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    return arrays.reduce((arr, curr) => [...arr, ...curr], [])
}

console.log(concatenateArrays(["a", "b"], ["c", "d"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]))


// Answer: 5

interface Course {
    title : string,
    students : number,
    isPublished : boolean,
}

const getPopularCourses = (course : Course[], minStudents :number) => {
    const favCourse = course.filter((crs) => {
        const isPubCourse = crs.isPublished == true;
        const stuCourse = crs.students >= minStudents;
        
        return isPubCourse && stuCourse
    })
    return favCourse
}

const courses : Course[] = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true }
];
console.log(getPopularCourses(courses, 80))


// Answer: 6

const pluckValues = <T, K extends keyof T>(items: T[], key:K): T[K][] => {
    const val = items.map(item => {
        const cVal = item[key]
        return cVal;
    })

    return val;
}

const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" }
];

console.log(pluckValues(users, "name"))
console.log(pluckValues(users, "id"))




// Answer: 7


class Employee {
    protected name: string;
    private baseSalary : number;

    constructor(name: string, baseSalary: number){
        this.name = name;
        this.baseSalary = baseSalary;
    }

    getDetails(): string{
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
    }
}

class Manager extends Employee{
    private department :string;

    constructor(name: string, baseSalary: number, department:string){
        super(name, baseSalary);
        this.department = department;
    }

    getRoleInfo():string {
        return `Manager of ${this.department}: ${this.name}`
    }
}

const manager = new Manager("Alice", 50000, "Engineering");
console.log(manager.getDetails())
console.log(manager.getRoleInfo())



// Answer: 8

const validateAgeAsync = (age: number): Promise<string> => {

    const ans:Promise<string> = new Promise((resolve, reject) => {
        if(age >= 18){
            setTimeout(() => {
                resolve("Access Granted")
            }, 1000);
        }
        else{
            reject(new Error("Access Denied: Must be 18 or older"))
        }
    });
    return ans;
}

validateAgeAsync(20)
    .then(result => console.log(result))
    .catch(error => console.error(error.message))

validateAgeAsync(15)
    .then(result => console.log(result))
    .catch(error => console.error(error.message))


 
