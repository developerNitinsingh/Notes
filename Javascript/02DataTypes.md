# Data Types

## Topic covered

1. Inroduction to Data types.
2. Datatypes in JavaScript.

# Introduction to Data Types

Data types are used to define the way the data is stored in memory. Storing data is an essential part of
programming as it enables the manipulation, processing, and sharing of information within a program.

The data types is a classification of data according to the types of value that we want to operate on.

JavaScript is a dynamically typed language, which means the data type is indentified during execution. The programmer need not to explicitly declare the data type in code.

Following are the Data tyoes of JavaScript:

1. String - Primitive
2. Number - Primitive
3. Bigint - Primitive
4. Booolean - Primitive
5. Undefined - Primitive
6. Null - Primitive
7. Symbol - Primitive
8. Object - **Non Primitive**
9. Array - **Non Primitive**

# Datatypes in JavaScript

### 1. String

Strings are the data type used for representing text. A string is sequence of characters, enclosed in single or double quotes.

```bash
# javascript

"I am learnig JavaScript "
'I am happy to learn'
```

### 2. Number :

Numbers are a data type used for representing numeric values. Numbers can be an integer, wholw numbers or decimal values [floating point values].

```bash
# javaScript
1
2
90
102.5
```

Other possible number values are **infinity** and **NaN.**

```bash
# JavaScript

NaN
Infinity
```

> - **Infinity** is a special value that is greater than any number.
> - **NaN** stands for **"Not a Number "** and is a special value that repreents the result of an undefined or unrepresentable mathematical operation.

### 3. BigInt :

In Javascript, there is a maximum safe value, which is approximately **2^53-1**. Similarly, there is also a minimum safe value, which is approximate **-(2^53-1)**.

This means that integers less than min safe value or greater than max safe value, may lose precision when represnted as a JavaScript number. So, for such numbers, we use **BigInt** Data type.

The bigInt data type number can also be treated as a regular number by adding **_n_** to it at the end.

```bash
# JavaScript

903427664n
```

### 4. Boolean :

Boolean is a logical tyoe that is either true or false.

```bash
# JavaScript

true
false
```

Booleans are often used to represent the outcome of a logical comparison or the result of a logical operation.

### 5. Undefined :

undefined is a special value that indicates that a variable or property has been declared but has not been assigned a value.

```bash
# JavaScript

undefined
```

### 6. Null :

Null means nothing or empty value. It is often used to indicate that a variable or property has no value.

```bash
# JavaScript

null
```

### 7. Object :

In JavaScript, numbers, strings, booleans, undefined, null are called as primitive data types.

Objects are non-primitive data because they are mutable (can be changed).

Object is collection of proerties, where each property has a key and a value, where

- key could be string or symbol.
- values could be of any datatype.

Objects are usually created by curly brackets { } called object literal syntax.

```bash
# JavaScript

{
    name: "Joe",
    company: "Google"
}
```

### 8. Symbol :

A Symbol is a data type that can be used as an object property key. Symbol as object keys, avoids potential conflicts with keys that other code may add to the object, and every Symbol() call is guaranteed to return a unique Symbol.

```bash
# JavaScript

Symbol("name")
```

### 9. Array - Non Primitive

Array is a data type containing data in sequential order. An array can cantain multiple values with multiple data types also.

Example -

```bash
# JavaScript

[1, 2, 3, 4, 5]
["Joe", 23, "developer"]
```
