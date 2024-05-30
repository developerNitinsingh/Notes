# Variables

## Topic Covered

1. Introduction to Variables
2. Creation of Variabes
3. Naming variables in JavaScript.
4. Assigning values to variables.

# Introduction to Variables.

`" Variable helps to hold space in memory "`

Variables are like containers, they are used to hold the information we’ll need when programming. Variables store data of any data type that can be used throughtout a program.

Variable means anything that can vary. Variables hold the data value and it can be changed anytime we want.

Creating a variable is also callled declaring a varible. There are three ways to create a variable in JavaScript.

1. var keyword
2. let keyword
3. const keyword

```bash
# JavaScript

var name = "Peter Johnson"
let name = "Peter Johnson"
const name = "Peter Johnson"
```

# Creation of variables

### A) var :

When we declare variable using the var keyword, it can be accessed within the function or globally, hence called function scoped (scope defines boundaries in the program where any variable can be accessed).

**Example 1:**

```bash
# JavaScript

var fullname = "Eoin Morgan" ;
console.log(fullname);

// output - Eoin Morgan
```

**Example 2:**

```bash
# JavaScript

// function Block

function getFullName (){
    console.log(fullname);   // 1st console
    var fullname = "Eoin Morgan" ;
    console.log(fullname);    // 2nd console

}


getFullName()
console.log(fullname);    // 3rd console


/* Output

undefined
Eoin Morgan
Uncaught RefrenceError : fullname is not defined

*/
```

In the above example there are three console logs, let's talk about each console output one by one.

1. The 2nd console output is the value of variable **fullname** and that is quite reasonable to see.
2. But the **1st** console outputs **undefined**, why? It's because, we are trying to access it before the variable initialization and JavaScript initializes var variable with value **undefined**. This concept is called **_Hoisting_** in JavaScript.

3. Now, let's talk about 3rd console, it throws **RefrenceError**, because as per definition, var variables are function scoped and accessible only within thee function where they are defined.

### B) let :

when we declare a variable using the **let** keyword, it will be accessed only within the block in which it is declared, hence called blocked (scope defines boundaries in the program where any variable can be accessed).

**Example 1 :**

```bash
# JavaScript

let age = 23;
console.log(age);

// Output - 23
```

**Example 2 :**

```bash
# JavaScript

// block

{
    console.log(age);  // 1st console
    let age = 23;
    console.log(age);    //2nd console
}


console.log(age);  // 3rd console


/* Output

23
Uncaught RefrenceError: age is not defined

*/

```

In the above example there are three console logs, let's talk about each console output one by one.

1. The 2nd console output is the value of variable **age** and that is quite reasonable to see.
2. But the 1st console throws a Refrence Error, why not **undefined** like var ? It's because, we are trying to access it before the variable initialization and unlike var, javascript does not initilize let variable with undefined.
3. Now, let's talk on the 3rd console, it also throws a **Refrence Error**, because as per definition, let variable are block scoped and accessible only within the block where they are defined.

### C) const :

Using const declaration, we defines constants(which does not change later ), and they are like **let**, **const** variables are also block scoped.

**Example:**

```bash
# JavaScript

const age = 23;
console.log(age);

age = 24;


/* Output

Uncaught TypeError: Assignment to conatant

*/

```

if we see the above example, when we tried to reinitialize the **age**, it threw an Type Error, because unlike **var** and **let**, we can not reinitialize **const** variables.

**Another Example :**

```bash
# JavaScript
const alex = {name:"alex", age = 23};
console.log(alex);

alex.name = "mang";   // No Error
console.log(alex) ;

alex = {name : "nasik", age : 33} ;  // Error
console.log(alex);

/* Output -

{name : "alex", age : 23}
{name : "mang", age : 23}
Uncaught TypeError : Assignment to constant

*/
```

In above example, we have defined an const variable **alex** and assigned a object to it, we have tried to explain const variable in case of object,

- **Case 1 :** When we try to modify alex object properties it won't throw errors, even alex is a const variable, because alex variable is only a refrence to an object not the actual object.
- **Case 2 :** And when we tried to modify the alex variable with another object, we are attempting to change the reference variable itself, so it will throw an TypeError.

Similarly, with arrays also, we can modify values within arrays, but we can not change const variables having refrence to array.

**Example,**

```bash
const nums = [1, 2, 3, 4, 5] ;
console.log(nums);

nums[1] = 0   //No Error
console.log(nums);

nums = [1, 2, 3, 4, 5] ; //Error

/* Output -

[1, 2, 3, 4, 5]
[1, 2, 3, 4, 5]
Uncaught TypeError : Assignment to constant

*/
```

# Difference between var, let and const declation

Here are listed difference between var, let and const variable.

![](/Javascript/assests/Screenshot%202024-05-28%20205325.png)

# Naming variable in JavaScript

When naming the variables, we must consider making the names descriptive and easily understandable. This will make our program easy to read and understand in the future when we have to refactor it.

Here are some rules one should look out for when naming variables:

- Variable names should begin with either a letter or an underscore or doller sign.

```bash
# JavaScript

var name = "Nitn"
var Name = "Nitn"
var _name = "Nitn"
var $name = "Nitn"
```

- Variable names should not begin with numbers or special characters expect the underscore and doller signs.

- Keywords are reserved words that have a specific meaning and can not be used as variable. keywords like if, else , for should not be used a variable names.

- Variable names are case-sensitive . That means name and Name are different variable names.

To ensure consistansy in naming variables adopt one of the following naming conventions in naming variables .
Developers mostly prefer **camel case** naming.

```bash
# JavaScript

var companyName = "Virat"    // Camel case

var CompanyName = "Virat"    // Pascal Case

var company_name = "Virat"   // Snake Case
```

# Assigning values to a variable

String data in a variable is also called assigning a value to a variable. To store data in a variable (assign value to a variable ), use the **=symbol**. place the variable name on the left side of the **=** symbol and place the value to store in the variable goes on the right side of the = symbol.

The = symbol is called the assignment operator. We will look into operator in depth in further lectures.

Variables can be created before assigning values to them.

```bash
# JavaScript

var name ;
name = "Kohli";
```

Whenever we create a variable without assigning a value to it, by default javascript store undefined [absense of the value ].

values can also be assigned to variables at the moment of creating them. Creating variables and assigning values to them at the same time is known as initializing a variable.

```bash
# JavaScript

var name = "joe";
var students = 12345678;
var enrolledToFSWD = true ;
var name = "joe", students = 12345678, enrolledToFSWD = true;
```
