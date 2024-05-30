# Scope

## Topic covered

1. What is scope ?
2. Different scopes in JS

   - Global
   - Local

     - Function
     - Block

   - Module

# What is Scope ?

Scope refers the accessbility of variables, function in a particular section of code during runtime. It determines the portion of code where a variable or function can be accessed and manipulated.

# Different Scope in JS

### 1. Global Scope :

the global scope is the outermost scope in javascript, variables and function declared in the global scope are accessble throughuout the entire codebase. They are accessible from any part of the code.

**Example :**

```bash
# JavaScript

var globalVariable = 8;

function xyz(){
    console.log(globalVariable);   // 8
}

console.log(globalVariable)  // 8


```

### 2. Local Scope :

Loacal scope is created when function and varibales are only accessible with any function or block, hence we have two types of scopes

- Function Scope
- Block Scope

**a. Function Scope :**

Function scope is created when a variable defined inside a function. Variable declared within a function scope are accessible only with in that function and not outside of it.

Each function creates its own scope, and variables declared within that function are local to that scope.

**Example :**

```bash
# JavaScript

function xyz(){
    var localVariable = 12 ;
    console.log(localVariable) ;
}

xyz()  // Output : 12

console.log (localVariable) ; // RefrenceError : localVariable is not defined
```

**b. Blook Scope :**  
Block scope was introduced in JavaScript with the introduction of the **let and const** keywords in **ECMAScript 6** (ES6).

A block scope is created within any pair of curly baraces{} (e.g. if statements, loops, function). Variables declared with let or const are limited to the block scope to the block scope and are not accessible outside of curly braces.

```bash
# JavaScript

if (true ) {
    var x = 10 ; // var has function scope
    let y = 20 ; // let has block scope
    const z = 30 ; // const has block scope
    console.log(x, y, z) // Output: 10 20 30

}

console.log(x); //Output : 10
console.log(y) ; //  Error: y is not defined
console.log(z) ; //  Error: z is not defined
```

### 3. Module Scope :

Module scope is introduced with the advent of jaavascript modules, which allow you to encapsulate code within individual files.

Each module has its own scope, and variable and functions defined within a module are only accessible within that module by default.

**Example :**

```bash
# JavaScript

// file name - module1.js

var moduleVariable = 12;

function moduleFunction (){
    console.log ('I am a module function');
}

export {moduleVariable , moduleFunction} ;

```

```bash
// file name - module2.js

import {moduleVariable, moduleFunction} from './module.js' ;

console.log(moduleVariable) ; // Output: 12

moduleFunction() ; // Output: I am a module function
```
