# Type Alias VS Interface in TypeScript

## Introduction

In Typescript both type and interface are used to define types. However, there are some differences between them. We can use either one depending on the type of work.

## Difference between Type Alias and Interface

* We can create object structure with interface.
* We can use type for Objects, Union, intersections and complex type
* If we create two interfaces with the same name TypeScript merge them into one
* If we create two type with the same name, Typescript shows an error. But we can merge different types using &

## Example
**Using Interface**

```
interface User {
    name: string,
    age: number,
}

interface User {
    location : string
}

const user : User = {
    name : "Khadiza",
    age: 21,
    location: "Khulna"
}
```
Both interfaces are merged into one

**Using Type Alias**

```
type User = {
    name: string,
    age: number,
}

type Users = User & {
    location : string
}

const user : Users = {
    name : "Khadiza",
    age: 21,
    location: "Khulna"
}
```

## When should you choose one over the other?

**Interface:**

* When it is necessary to create an object structure
* If you need to merge interfaces with the same name.

**Type Alias:**

* When to create a Union Type.
* When you need to create an intersection or complex type

If it is possible to work with an interface, I will try to use an interface there. Otherwise, I will use a type alias.

## Conclusion

Both are useful in Typescript. I use interface for objects and type for unions and complex types.