# combining Union (|) and Intersection (&) types in TypeScript
## Introduction

In TypeScript we can use Union (|) and Intersection (&) types to combine different types. A Union means OR (|) and Intersection means AND (&). Using both together helps us create reusable types.


## Example: Student and Teacher management system

Imagine we are creating a system where a user can be either a Student or a Teacher. Both of them share some common information, like a name.

**Code Example**
```
interface Common {
    name: string,
}

interface Student {
    studentId : number,
    class : number,
}

interface Teacher {
    teacherId: number,
    subject : string,
}

// Union Type
type Role = Student | Teacher;

// Intersection Type
type User = Common & Role;

// Student information
const student: User = {
    name: "Khadiza",
    studentId: 225,
    class: 12,
}

// Teacher information
const teacher: User = {
    name : "Khadiza",
    teacherId: 2,
    subject: "Economic"
}
```

## Explanation

* Union ( | ): A user can be Student OR(|) Teacher. It has to be any one of them.

* Interface ( & ): Both Common and Role must be required. Every user needs the common properties and can be either a Student or a Teacher


## Conclusion
Union and Intersection type help us write flexible and clean code. They help us manage different users and share common information easily.

