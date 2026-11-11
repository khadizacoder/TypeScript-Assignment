"use strict";
const multiplyValue = (num1, num2 = 2) => {
    return num1 * num2;
};
const processInput = (value) => {
    if (typeof value === 'string') {
        let txt = value.trim();
        return txt.toLowerCase();
    }
    else if (typeof value === "number") {
        return value * 10;
    }
    else {
        if (value === true)
            return "Active";
        else
            return "Inactive";
    }
};
const formatCoordinate = (value) => {
    const [latitude, longitude, locationName] = value;
    return `Location: ${locationName}, ${latitude}, ${longitude}`;
};
const concatenateArrays = (...arrays) => {
    return arrays.reduce((arr, curr) => [...arr, ...curr], []);
};
const getPopularCourses = (course, minStudents) => {
    const favCourse = course.filter((crs) => {
        const isPubCourse = crs.isPublished == true;
        const stuCourse = crs.students >= minStudents;
        return isPubCourse && stuCourse;
    });
    return favCourse;
};
const pluckValues = (items, key) => {
    const val = items.map(item => {
        const cVal = item[key];
        return cVal;
    });
    return val;
};
class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    department;
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`;
    }
}
const validateAgeAsync = (age) => {
    const ans = new Promise((resolve, reject) => {
        if (age >= 18) {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        }
        else {
            reject(new Error("Access Denied: Must be 18 or older"));
        }
    });
    return ans;
};
