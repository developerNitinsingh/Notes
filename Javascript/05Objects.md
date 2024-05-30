# Object

- It's stores the data keyed collection.
- or you can say it store the data in the from of key- value pair.
- this is for more complex data .
- we can store any type of data in the objects.
- we denotes the object throuth `curly braces {}`.

```bash
# JavaScript

{
    name : "john"
}

/* this is a simple object where name is key and john is value , key is string data , and value could be any type of data it could be string, number, boolean, function or object itself.  */
```

# How to create an Object

There are three way to create an objects :

### 1. Object Literal :

```bash
# javascript

let employee = {} ;

/*
created a emply object

*/
```

### 2. Object constructor :

Using this we can create a intance of an Object.

- Here **`new`** keyword is used to create an Object.

```bash
# JavaScript

let employee = new Object()

```

### 3. Using custom function constructor :

In this method we can use define a Function with arguments this function could treated as a template , each argument value can be assign to curent object using `this` keyword, which refers to the current object or current context.

```bash

# JavaScript

function objj(name, id) {
  this.name = name;
  this.id = id;
}

const person1 = new objj("nitin", 2);

person1.role = "hero";  // can add the more properits
person1.id = 5;  // can modify the properties

console.log(person1);
```
