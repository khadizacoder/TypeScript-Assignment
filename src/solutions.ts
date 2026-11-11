

const multiplyValue = (num1 : number, num2 : number = 2) : number => {
    return num1 * num2
}




const processInput = (value : string | number | boolean) : number | string => {
    if(typeof value === 'string'){
        let txt : string = value.trim()
        return txt.toLowerCase()
    } 
    else if (typeof value === "number"){
        return value * 10
    }
    else{
        if(value === true)
            return "Active"
        else
            return "Inactive"
    }
}





const formatCoordinate = (value : [number, number, string]) : string => {
    const [latitude, longitude, locationName] = value;
    return `Location: ${locationName}, ${latitude}, ${longitude}`
}

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    return arrays.reduce((arr, curr) => [...arr, ...curr], [])
}




interface Course {
    title : string,
    students : number,
    isPublished : boolean,
}

const getPopularCourses = (course : Course[], minStudents :number) : Course[] => {
    const favCourse = course.filter((crs) => {
        const isPubCourse = crs.isPublished == true;
        const stuCourse = crs.students >= minStudents;
        
        return isPubCourse && stuCourse
    })
    return favCourse
}




const pluckValues = <T, K extends keyof T>(items: T[], key:K): T[K][] => {
    const val = items.map(item => {
        const cVal = item[key]
        return cVal;
    })

    return val;
}







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
