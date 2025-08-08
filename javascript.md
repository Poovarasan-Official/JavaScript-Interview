### Connect with Us
[![LinkedIn](https://img.icons8.com/fluency/48/linkedin.png)](https://www.linkedin.com/in/poovarasan-r/)

<!-- Question 1 -->

## 1. What is the difference between var, let, & const ?

### Answer :

- `var` is a function scope(variables declared inside a function are not accessible outside the function) or global scope variable, var is NOT block scoped (it ignores { } in if/for/while). It can be re-assigned & re-declared.
- `let` is a block scope variable(only works inside { } where it’s declared, no matter if it’s a function, loop, or if). It can be re-assign but can't be re-declared.
- `const ` is a block scope varibale, It can't be re-assign or re-declared. But if the value is an object or array, its value can still change.

### Example Code:

```javascript
// ============| var Examples |============== //
// Redeclaration & Reassignment with var
var firstName = "Poovarasan"; // Declare + assign
console.log(firstName); // ✅ "Poovarasan"

var firstName = "R"; // Redeclare (allowed with var)
console.log(firstName); // ✅ "R"

firstName = "Poovarasan R"; // Reassign (also allowed)
console.log(firstName); // ✅ "Poovarasan R"
// ---------------Example 2 -----------------//
var firstName = "Poovarasan";

function testvar() {
  var lastName = "R"; // Only available inside function
  console.log(firstName); //  ✅ "Poovarasan" (global var accessible inside function)
  console.log(lastName); // ✅ "R"
}
testvar();

console.log(lastName); // ❌ Error: lastName is not defined outside the function
// ------------------Example 3-------------------//
var greeting = "Hello World!"; // global variable

function sayHello() {
  console.log(greeting);
}

function changeGreeting() {
  greeting = "Hi, JavaScript!"; // No 'var' here → changes the global variable
}

// Step 1: Call sayHello
sayHello();        
// Output: Hello World!
// (Because greeting is still "Hello World!")

// Step 2: Call changeGreeting
changeGreeting();  
// This changes greeting's value from "Hello World!" → "Hi, JavaScript!"

// Step 3: Call sayHello again
sayHello();        
// Output: Hi, JavaScript!
// (Because greeting is now updated)

console.log(greeting); 
// Output: Hi, JavaScript!
// (We see the latest value in the global variable)

```

```javascript
// ============| let Examples |============== //
let firstName = "Poovarasan"; // Declaring and initializing a variable
console.log(firstName); // Output: Poovarasan

// let firstName = "R"; // Re-declaring and re-assigning the variable
// console.log(firstName); // ❌ Error:  Identifier 'firstName' has already been declared

firstName = "Poovarasan Developer"; // Re-assigning the variable
console.log(firstName); // Output: Poovarasan Developer
// ---------------Example 2 -----------------//
if (true) {
  let a = 10;
}
console.log(a); // ❌ Error (block scope works)

function testLet() {
  let b = 20;
}
console.log(b); // ❌ Error (function is also a block)

//------------Example 3 ----------------//
if (true) {
  var x = 10; // function/global scope
  let y = 20; // block scope
}
console.log(x); // ✅ 10 (var escapes block)
console.log(y); // ❌ Error: y is not defined

//------------Example 4 ----------------//
// 📌let is not added to window:

let name = "Poovarasan";
console.log(window.name); // ❌ undefined

```

```javascript
// ============| const Examples |============== //
// Must initialize immediately
const firstName; // ❌ Error: Missing initializer
const firstName = "Poovarasan"; // ✅ Works

const firstName = "Poovarasan"; // Declaring and initializing a variable
console.log(firstName); // Output: ✅ Poovarasan

// Cannot be redeclared
const city = "Chennai";
const city = "Madurai"; // ❌ Error: Identifier 'city' has already been declared

// Cannot be reassigned
const age = 25;
age = 30; // ❌ Error: Assignment to constant variable

// ---------------Example 2 -----------------//
if (true) {
  const fruit = "Apple";
  console.log(fruit); // ✅ Apple
}
console.log(fruit); // ❌ Error: fruit is not defined

// ------  Example: Object with const -------//
const user = { name: "Poovarasan", age: 25 };

// ✅ We can change object properties
user.age = 26;
console.log(user); // { name: "Poovarasan", age: 26 }

// ❌ We cannot reassign the whole object
// user = { name: "R" }; // Error

// ------  Example: Array with const -------//
const colors = ["red", "green"];

// ✅ Can modify array contents
colors.push("blue");
console.log(colors); // ["red", "green", "blue"]

// ❌ Cannot reassign the array
// colors = ["black"]; // Error

```
### 📊 JavaScript: `var` vs `let` vs `const` – Full Comparison Guide

| Feature | <span style="color:orange">`var`</span> | <span style="color:green">`let`</span> | <span style="color:blue">`const`</span> |
|---------|--------------------------------|--------------------------------|--------------------------------|
| **Scope** | Function-scoped | Block-scoped | Block-scoped |
| **Hoisting** | ✅ Hoisted (*initialized as `undefined`*) | ✅ Hoisted (*but not initialized*) | ✅ Hoisted (*but not initialized*) |
| **Re-declaration** | ✅ Allowed in same scope | ❌ Not allowed in same scope | ❌ Not allowed in same scope |
| **Re-assignment** | ✅ Allowed | ✅ Allowed | ❌ Not allowed |
| **Initial Value Required** | ❌ No | ❌ No | ✅ Yes |
| **Temporal Dead Zone (TDZ)** | ❌ No | ✅ Yes | ✅ Yes |
| **Attaches to `window` in browser** | ✅ Yes                | ❌ No                              | ❌ No                             
| **Best Use Case** | Legacy code, not recommended | Variables that change value | Constants that never change |

> \* **TDZ** = Temporal Dead Zone (cannot access before declaration)

---

<!-- Question 2 -->

## 2. What is Data type in JavaScript ?

### Answer :

Data type is a type of data, that can be value stored in variable.

### There are two types of data in JavaScript:

#### i. Primitive Data Types

- **String**
- **Number**
- **Boolean**
- **Undefined**
- **Null**
- **BigInt**
- **Symbol**

| **Data Type** | **Description**                                                                                                       | **Examples**                                                                                |
| ------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| **String**    | Text stored in single quotes, double quotes, or backticks.                                                            | `'hello'`, `"hello"`, `` `hello` ``                                                         |
| **Number**    | Represents integer & floating numbers (decimals & exponentials).                                                      | `30`, `19.06`, `12.2e2` (1220)                                                              |
| **Boolean**   | Represents `true` or `false`. Used for Yes or No values.                                                              | `true`, `false`                                                                             |
| **Undefined** | Not assigned a value in a variable.                                                                                   | `let example; console.log(example);` // `undefined`                                         |
| **Null**      | Represents an empty value or unknown value.                                                                           | `let example2 = null; console.log(example2);` // `null`                                     |
| **BigInt**    | Represents large integers greater than `Number.MAX_SAFE_INTEGER`. Created by appending `n` to the end of the integer. | `const x = 900719925124740998n; const y = x + 1n; console.log(y);` // `900719925124740999n` |
| **Symbol**    | Immutable value that is unique, often used as object property keys.                                                   | `const sym = Symbol('description');`                                                        |

#### ii. Non-Primitive Data Types

- **Object**
- **Array**
- **Function**
- **Date**

### i. Object

"An object is a collection of key-value pairs. Each key-value pair is called a property. It stores collections of different types of data. The property key is always a string, but the value can be any data type, such as a string, number, array, etc."

### Example Code:

```javascript
const person = {
  name: "Poovarasan",
  age: 25,
  isEmployed: true,
};
```

### ii. Array

"Arrays are used to store multiple values in a single variable. Each value stored in an array has a position, known as the index, which starts at 0."

### Example Code:

```javascript
// Array of fruits
let fruits = ["Apple", "Orange", "Mango", "Banana"];

// Accessing an array element by index
console.log(fruits[0]); // Output: Apple
```

<!-- Question 3 -->

## 3. What are JavaScript operators?

### Answer :
In JavaScript, operators are special symbols used to perform operations on variables and values. They are the building blocks for performing tasks such as arithmetic calculations, comparison, logical operations, assignment, and more.

### 1. **Arithmetic Operators**
Used to perform mathematical operations.

| **Operator** | **Description**        | **Example**     |
| ------------ | ---------------------- | --------------- |
| `+`          | Addition               | `5 + 3` -> `8`  |
| `-`          | Subtraction            | `5 - 3` -> `2`  |
| `*`          | Multiplication         | `5 * 3` -> `15` |
| `/`          | Division               | `6 / 3` -> `2`  |
| `%`          | Modulus (remainder)    | `5 % 3` -> `2`  |
| `**`         | Exponentiation (power) | `2 ** 3` -> `8` |

### 2. **Assignment Operators**
Used to assign values to variables.

| **Operator** | **Description**     | **Example**               |
| ------------ | ------------------- | ------------------------- |
| `=`          | Assigns a value     | `let x = 5;`              |
| `+=`         | Add and assign      | `x += 2;` -> `x = x + 2;` |
| `-=`         | Subtract and assign | `x -= 2;` -> `x = x - 2;` |
| `*=`         | Multiply and assign | `x *= 2;` -> `x = x * 2;` |
| `/=`         | Divide and assign   | `x /= 2;` -> `x = x / 2;` |
| `%=`         | Modulo and assign   | `x %= 2;` -> `x = x % 2;` |

### 3. **Comparison Operators**
Used to compare two values and return a Boolean result (true or false).

| **Operator** | **Description**       | **Example**            |
| ------------ | --------------------- | ---------------------- |
| `==`         | Equal to (loose)      | `5 == '5'` -> `true`   |
| `===`        | Equal to (strict)     | `5 === '5'` -> `false` |
| `!=`         | Not equal to (loose)  | `5 != '5'` -> `false`  |
| `!==`        | Not equal to (strict) | `5 !== '5'` -> `true`  |
| `>`          | Greater than          | `5 > 3` -> `true`      |
| `<`          | Less than             | `5 < 3` -> `false`     |
| `>=`         | Greater than or equal | `5 >= 3` -> `true`     |
| `<=`         | Less than or equal    | `5 <= 3` -> `false`    |

### 4. **Logical Operators**

| **Operator** | **Description** | **Example**                |
|--------------|-----------------|----------------------------|
| `&&`         | Logical AND     | `true && false` -> `false` |
| `||`         | Logical OR      | `true || false` -> `true`  |
| `!`          | Logical NOT     | `!true` -> `false`         |


### 5. **Conditional (Ternary) Operator**

| **Operator**                | **Description**                                                       | **Example**                                     |
| --------------------------- | --------------------------------------------------------------------- | ----------------------------------------------- |
| `condition ? expr1 : expr2` | Executes `expr1` if the condition is true, otherwise executes `expr2` | `let result = (x > 10) ? "Greater" : "Lesser";` |

### 6. **Type Operators**

| **Operator** | **Description**                                        | **Example**              |
| ------------ | ------------------------------------------------------ | ------------------------ |
| `typeof`     | Returns the type of a variable                         | `typeof 5` -> `"number"` |
| `instanceof` | Checks if an object is an instance of a specific class | `x instanceof Array`     |

### 7. **Bitwise Operators**

| **Operator** | **Description**         | **Example**                |
|--------------|-------------------------|----------------------------|
| `&`          | AND operation           | `5 & 3` -> `1`             |
| `|`          | OR operation            | `5 | 3` -> `7`             |
| `^`          | XOR operation           | `5 ^ 3` -> `6`             |
| `~`          | NOT operation           | `~5` -> `-6`               |
| `<<`         | Left shift              | `5 << 1` -> `10`           |
| `>>`         | Right shift             | `5 >> 1` -> `2`            |
| `>>>`        | Unsigned right shift    | `-5 >>> 1` -> `2147483642` |


### 8. **Unary Operators**

| **Operator** | **Description**                      | **Example**            |
| ------------ | ------------------------------------ | ---------------------- |
| `++`         | Increment by 1                       | `x++` (post-increment) |
| `--`         | Decrement by 1                       | `x--` (post-decrement) |
| `+`          | Unary plus (convert to number)       | `+ "5"` -> `5`         |
| `-`          | Unary negation (convert to negative) | `- "5"` -> `-5`        |
| `!`          | Logical NOT                          | `!true` -> `false`     |

### 9. **Spread (`...`) and Rest (`...`) Operators**

- Spread: Expands elements of an array or object.
- Rest: Collects multiple elements into an array.

| **Operator** | **Description**                    | **Example**                      |
| ------------ | ---------------------------------- | -------------------------------- |
| `...`        | Spread operator (expands elements) | `const newArr = [...arr, 4, 5];` |
| `...`        | Rest operator (collects elements)  | `function sum(...args) {}`       |

### 10. **Delete Operator**

| **Operator** | **Description**                                               | **Example**       |
| ------------ | ------------------------------------------------------------- | ----------------- |
| `delete`     | Deletes a property from an object or an element from an array | `delete obj.age;` |

### 11. **Comma Operator**

| **Operator** | **Description**                                                           | **Example**               |
| ------------ | ------------------------------------------------------------------------- | ------------------------- |
| `,`          | Evaluates multiple expressions, returns the result of the last expression | `let x = (2 + 3, 4 + 5);` |

<!-- Question 4 -->

## 4. What is a closure in JavaScript ?

### Answer :

A closure is a function in JavaScript where an inner function has access to the variables of its outer function, even after the outer function has finished executing.

### Example Code:

```javascript
function outerFunction(outerVariable) {
  // outerVariable is a parameter
  return function innerFunction(innerVariable) {
    // innerVariable is a parameter
    console.log(`Outer Variable: ${outerVariable}`);
    console.log(`Inner Variable: ${innerVariable}`);
  };
}

// Function invocation with arguments
const newFunction = outerFunction("outside"); // "outside" is an argument
newFunction("inside"); // "inside" is an argument
```

### Output Console :

```javascript
 Outer Variable: outside
 Inner Variable: inside
```

<!-- Question 5 -->

## 5. What is type coercion in javascript ?

### Answer :

Type coercion in JavaScript is the automatic or implicit conversion of a value from one data type to another.

#### i. Implicit Type Coercion

javaScript automatically converts one data type to another certain operations.

### Example Code:

```javascript
// Example 1: Coercion to String
let result = "5" + 10; // The number 10 is coerced into a string
console.log(result); // Output: "510" (string)

// Example 2: Coercion to Number
let difference = "20" - 5; // The string "20" is coerced into a number
console.log(difference); // Output: 15 (number)

// Example 3: Coercion to Boolean
console.log(Boolean(0)); // Output: false (0 is false)
console.log(Boolean(1)); // Output: true (1 is true)
console.log(Boolean("")); // Output: false (empty string is false)
console.log(Boolean("hello")); // Output: true (non-empty string is true)

// Example 4: Coercion to Comparison Operations:
let y = 10 == "10";
console.log(y); // Output: true (both are converted to numbers)
```

#### ii. Explicit Type Conversion

Explicit type conversion also known as typecasting, is the process of manually converting a value from one data type to another in javaScript.

### Example Code:

```javascript
// Explicit String Conversion
let num = 42;
let str = String(num); // Convert number to string
console.log(str); // Output: "42" (string)

// Explicit Number Conversion
let strNum = "123";
let numValue = Number(strNum); // Convert string to number
console.log(numValue); // Output: 123 (number)

// Explicit Boolean Conversion
let value = 0;
let boolValue = Boolean(value); // Convert to boolean
console.log(boolValue); // Output: false
```

<!-- Question 5 -->

## 6. What is the difference between `==` and `===` ?

### Answer :

In JavaScript, `==` and `===` are comparison operators used to check if two values are equal.

- `==` Compares values with type coercion.
- `===` Compares values without type coercion using (strict equality).

```javascript
let x = 10 == "10";
console.log(x); // Output: true (because of type coercion)

let y = 10 === "10";
console.log(y); // Output: false, (because without type coercion)
```

<!-- Question 6 -->

## 7. Types of conditional statements in javascript ?

### Answer :

- `if...else statement`
- `if...else if...else statement`
- `Ternary Operator`
- `switch case statement`

#### i. `if-else` Syntax:

The `if-else` statement executes a block of code based on specific condition. If the condition is true, the code within the `if` block is executed. If the condition is false, the code within the `else` block is executed.

```javascript
if (condition) {
  // code to execute if condition is true
} else {
  // code to execute if condition is false
}
```

### Example Code:

```javaScript
let age = 25;

if (age >= 18) {
  console.log('You can sign up.');
} else {
  console.log('You must be at least 18 to sign up.');
}

// ✅ Output: You can sign up.
```

#### ii. `Ternary Operator` Syntax:

The ternary operator is a javaScript operator that takes three operands: a condition followed by a question `(?)`, an expression to be executed if the condition is true, followed by a colon`(:)` & finally an expression to be executed if the condition is false.

```javascript
condition ? expression1 : expression2;
```

### Example Code:

```javascript
let age = 15;
let output = age >= 18 ? "You are an adult." : "You are a minor.";
console.log(output);

// ✅ Output: You are a minor.
```

#### iii. `Switch Case` Syntax:

A switch case statement is a control flow statement that executes a different block of code based on the value of an expression.

```javascript
switch (expression) {
  case value1:
    // Code to execute if expression matches value1
    break;
  case value2:
    // Code to execute if expression matches value2
    break;
  // ... more cases
  default:
  // Code to execute if no case matches
}
```

### Example Code:

```javascript
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Today is Monday.");
    break;
  case "Tuesday":
    console.log("Today is Tuesday.");
    break;
  case "Wednesday":
    console.log("Today is Wednesday.");
    break;
  default:
    console.log("Today is some other day.");
}

// ✅ Output: Today is Monday..
```

<!-- Question 8 -->

## 8. What is a Function in JavaScript?

### Answer :

A function in JavaScript is a reusable block of code that performs a specific task. It's a fundamental building block in JavaScript programming.

### ✏️JavaScript has Several types of functions:

- Named Function
- Anonymous Function
- Arrow Function
- Generator Function
- Constructor Function
- Methods
- IIFE (Immediately Invoked Function Expression)

| **Aspect**            | **Arrow Function**                          | **Regular Function**                        |
| --------------------- | ------------------------------------------- | ------------------------------------------- |
| **Syntax**            | Shorter and more concise                    | More verbose                                |
| **`this` Context**    | Lexical `this` (inherits from parent scope) | Dynamic `this` (depends on how it's called) |
| **Constructor Usage** | Cannot be used as a constructor             | Can be used with `new` keyword              |
| **Prototype**         | No `prototype` property                     | Has a `prototype` property                  |
| **Arguments Object**  | Does not have `arguments`                   | Has `arguments`                             |

#### i. Named Function:

#### ✨Basic Syntax:

```javascript
function functionName(parameter1, parameter2, ...) {
  // Code to be executed
  return value; // Optional return statement
}
functionName();  // call the function
```

### Example Code:

```javascript
// Example 1
function greet() {
  console.log("Hello, world!");
  // Output: ✅ Hello, world!
}

greet(); // Calling the function

// Example 2 with parameter
function greet(name) {
  console.log("Hello, " + name + "!");
  // ✅ Output: Hello, Poovarasan!
}

greet("Poovarasan"); // Calling the function

// Example 3
function greet(x, y) {
  return x + y;
}

let result = greet(5, 3); // Calling the function
console.log(result); // ✅ Output: 8
```

#### ii. Arrow Function:

An arrow function is a concise syntax to write functions in JavaScript, introduced in ES6 (ECMAScript 2015).

#### ✨Basic Syntax:

```javascript
(parameters) => {
  // function body
};
```

### Example Code:

```javascript
// Example 1
const greet = (name) => {
  console.log("Hello, " + name + "!");
  // ✅ Output: Hello, Poovarasan!
};

greet("Poovarasan");

// Example 2
const greet = (name) => `Hello, ${name}!`;
console.log(greet("Poovarasan"));
// ✅ Output: Hello, Poovarasan!

// Example 3
const multiply = (a, b) => {
  const product = a * b;
  return product;
};
console.log(multiply(3, 4)); // Output: 12

// Example 4
const obj = {
  name: "Poovarasan",
  greet: function () {
    setTimeout(() => {
      console.log(`Hello, ${this.name}!`);
    }, 1000);
  },
};
obj.greet(); // Output: Hello, Poovarasan!
```

<!-- Question 9 -->

## 9. Explain the `call`, `apply`, and `bind` methods in JavaScript?

### Answer :

In JavaScript, the `call,` `apply,` and `bind` methods are used to control the value of this when invoking functions.

- `call` Invokes the function immediately with specified this value and arguments provided one by one
- `apply` Similar to `call`, but arguments are provided as an array.
- `bind` method creates a new function with a specified this value and optional arguments. It does not invoke the function immediately but returns a new bound function.

| **Aspect**           | **call()**                        | **apply()**                       | **bind()**                                   |
| -------------------- | --------------------------------- | --------------------------------- | -------------------------------------------- |
| **Invocation**       | Invokes the function immediately. | Invokes the function immediately. | Returns a new function (not invoked).        |
| **Arguments Format** | Passed individually.              | Passed as an array or array-like. | Passed individually (optional when binding). |
| **Return Value**     | The result of the function call.  | The result of the function call.  | A new bound function.                        |

### Example Code:

```javascript
const person = {
  firstName: "Ben",
  lastName: "Stokes",
  fullName: function (city, country) {
    return `${this.firstName} ${this.lastName} from ${city}, ${country}`;
  },
};

const person1 = { firstName: "Poovarasan", lastName: "R" };
const person2 = { firstName: "Joe", lastName: "Root" };

// Using call()
console.log(person.fullName.call(person1, "New York", "USA"));
// ✅ Output: Poovarasan R from New York, USA

// Using apply()
console.log(person.fullName.apply(person2, ["London", "UK"]));
// ✅ Output: Joe Root from London, UK

// Using bind()
const boundFullName = person.fullName.bind(person1, "Paris", "France");
console.log(boundFullName()); // ✅ Output: Poovarasan R from Paris, France
```

<!-- Question 10 -->

## 10. What is a Callback Function in JavaScript?

### Answer :

A callback function is a function that is passed as an argument to another function and is executed after some operation or event.

### Example Code:

```javascript
function fetchData(callback) {
  console.log("Fetching data...");
  setTimeout(() => {
    console.log("Data fetched!");
    callback();
  }, 2000);
}

function processData() {
  console.log("Processing data...");
}

fetchData(processData);
// Output:
// Fetching data...
// Data fetched!
// Processing data...
```

<!-- Question 11 -->

## 11. what is `setTimeout` vs `setInterval` vs `clearInterval` in JavaScript?

### Answer :

- `setTimeout` method executes a function once after a specified delay.
- `setInterval` method is used to repeatedly execute a function at a specific time interval.
- `clearInterval` method stops a repeating action set by setInterval.

```javascript
// syntax
setTimeout(function, delay, arg1, arg2, ...);
setInterval(function, delay, arg1, arg2, ...);
clearInterval(intervalId);
// function: The function to execute after the delay.
// delay: The time in milliseconds to wait before executing the function.
// arg1, arg2, ...: Optional arguments to pass to the function.

```

### Example Code:

```javascript
console.log("Before delay");

setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000);

console.log("After setting timeout");

// ✅ Output:
// Before delay
// After setting timeout
// Executed after 2 seconds
```

```javascript
setInterval(() => {
  console.log("Executed every 2 seconds");
}, 2000);

// ✅ Output:
// Executed every 2 seconds
// Executed every 2 seconds
// Executed every 2 seconds
```

```javascript
// Start a repeating interval
const intervalId = setInterval(() => {
  console.log("Executed every 2 seconds");
}, 2000);

// Stop the interval after 10 seconds
setTimeout(() => {
  clearInterval(intervalId);
  console.log("Interval stopped");
}, 10000);

// ✅ Output:
// Executed every 2 seconds
// Executed every 2 seconds
// Executed every 2 seconds
// Executed every 2 seconds
// Executed every 2 seconds
// Interval stopped
```

<!-- Question 12 -->

## 12. What Are Loops in JavaScript?

### Answer :

Loops are used in JavaScript to perform repetitive tasks based on a condition.

### Types of Loops in JavaScript

- for Loop
- while Loop
- do...while Loop
- for...of Loop (ES6)
- for...in Loop

### i. for loop

```javascript
// syntax
for (initialization; condition; increment / decrement) {
  // Code to execute
}
```

### Example Code:

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(`Iteration ${i}`);
}
// ✅ Output:
// Iteration 1
// Iteration 2
// Iteration 3
// Iteration 4
// Iteration 5
```

<!-- Question 13 -->

## 13. What are the `break` and `continue` statements in JavaScript?

### Answer :

In JavaScript, `break` and `continue` are control flow statements that are used to modify the execution flow of loops (for, while, do...while, etc.)

- The `break` statement is used to terminate the current loop or switch statement.
- The `continue` statement is used to skip the current iteration of the loop and proceed to the next iteration.

### Example Code:

```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break; // Exit the loop when i equals 3
  }
  console.log(i);
}
// ✅ Output:
// 1
// 2
```

```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // Skip the iteration when i equals 3
  }
  console.log(i);
}
// ✅ Output:
// 1
// 2
// 4
// 5
```

<!-- Question 14 -->

## 14. What is a Promise in JavaScript?

### Answer :

A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value

#### A Promise can be three states

- `Pending` Initial state, neither fulfilled nor rejected.
- `Fulfilled` The operation was completed successfully, and the promise is resolved with a value.
- `Rejected` The operation failed, and the promise is rejected with a reason (an error or message).

#### Methods

- `.then()` Used to handle the fulfilled state.
- `.catch()` Used to handle the rejected state.
- `.finally()` Used to execute code regardless of whether the promise is fulfilled or rejected. To perform cleanup tasks.

### Example Code:

```javascript
const age = 18;

const votePromise = new Promise((resolve, reject) => {
  if (age >= 18) {
    resolve("You are eligible for voting.");
  } else {
    reject("You are not eligible for voting.");
  }
});

votePromise
  .then((message) => {
    console.log(message); // Runs if resolved
  })
  .catch((error) => {
    console.error(error); // Runs if rejected
  })
  .finally(() => {
    console.log("Vote eligibility check completed."); // Always runs
  });

// ✅ output: You are eligible for voting.
// Vote eligibility check completed.
```

<!-- Question 15 -->

## 15. What are async and await in JavaScript?

### Answer :

`async` and `await` are modern JavaScript features introduced in ES2017 (ES8) to handle asynchronous operations

- `async` "The async keyword is used to declare an asynchronous function, which always returns a promise."
- `await` "The await keyword can only be used inside an `async` function. It pauses the execution of the `async` function until the promise is settled (either resolved or rejected). Once the promise is settled, the `await` expression evaluates to the resolved value of the promise or throws an error if the promise is rejected."
- `Error Handling` Errors can be handled using `try...catch`, making the code cleaner.

### Example Code:

```javascript
async function fetchUserAsync() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchUserAsync();
```

<!-- Question 16 -->

## 16. What is a Higher-Order Function in JavaScript?

### Answer :

A higher-order function is a function that takes one or more functions as arguments, or returns a function.

### Common Use Cases

- Callback Functions
- Array Methods
- Function Currying

<!-- Question 17 -->

## 17. Array method in javascript?

### Answer :

### 1. push()

Adds one or more elements to the end of an array and returns the new length of the array.

```javascript
const fruits = ["Apple", "Banana"];
fruits.push("Orange"); // Adds 'Orange' to the end
console.log(fruits); // Output: ['Apple', 'Banana', 'Orange']
```

### 2. pop()

Removes the last element from an array and returns that element.

```javascript
const fruits = ["Apple", "Banana", "Orange"];
const lastFruit = fruits.pop();
console.log(lastFruit); // Output: 'Orange'
console.log(fruits); // Output: ['Apple', 'Banana']
```

### 3. shift()

Removes the first element from an array and returns that element.

```javascript
const fruits = ["Apple", "Banana", "Orange"];
const firstFruit = fruits.shift();
console.log(firstFruit); // Output: 'Apple'
console.log(fruits); // Output: ['Banana', 'Orange']
```

### 4. unshift()

Adds one or more elements to the beginning of an array and returns the new length of the array.

```javascript
const fruits = ["Banana", "Orange"];
fruits.unshift("Apple"); // Adds 'Apple' to the beginning
console.log(fruits); // Output: ['Apple', 'Banana', 'Orange']
```

### 5. concat()

Combines two or more arrays into one new array.

```javascript
const fruits = ["Apple", "Banana"];
const vegetables = ["Carrot", "Cucumber"];
const food = fruits.concat(vegetables);
console.log(food); // Output: ['Apple', 'Banana', 'Carrot', 'Cucumber']
```

### 6. slice()

Returns a shallow copy of a portion of an array into a new array, without modifying the original array.

```javascript
const fruits = ["Apple", "Banana", "Orange", "Mango"];
const slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // Output: ['Banana', 'Orange']
```

### 7. splice()

Changes the content of an array by removing or replacing existing elements or adding new elements in place.

```javascript
array.splice(start, deleteCount, item1, item2, ...); // syntax

const fruits = ['Apple', 'Banana', 'Orange'];
fruits.splice(1, 1, 'Grapes'); // Removes 1 element at index 1 and adds 'Grapes'
console.log(fruits); // Output: ['Apple', 'Grapes', 'Orange']

```

### 8. forEach()

Executes a provided function once for each array element. It doesn't return anything, and it cannot be stopped prematurely (like a break).

```javascript
// Syntax:
array.forEach(function (element, index, array) {
  // code to be executed for each element
});

const fruits = ["Apple", "Banana", "Orange"];
fruits.forEach((fruit) => {
  console.log(fruit);
});
// Output:
// Apple
// Banana
// Orange
```

### 9. map()

Creates a new array with the results of calling a provided function on every element in the array.

```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8]
```

### 10. filter()

Creates a new array with all elements that pass the test implemented by the provided function.

```javascript
const arr = [1, 2, 3, 4];
const result = arr.filter((x) => x > 2);
console.log(result); // Output: [3, 4]
```

### 11. reduce()

The reduce() method in JavaScript is a powerful array method that applies a function to each element in an array and reduces it to a single output value. It's often used to perform calculations, flatten arrays, or convert data

```javascript
arr.reduce(callbackFunction, initialValue); // Syntax

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, current) => acc + current, 0);
console.log(sum); //  Output: 15
```

### 11. find()

The find() method returns the first element in an array that satisfies a provided testing function. If no elements satisfy the testing function, undefined

```javascript
arr.find(callbackFunction, thisArg); // Syntax

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Bob" },
];
const user = users.find((user) => user.name === "Jane");
console.log(user); // { id: 2, name: 'Jane' }
```

### 12. sort()

It modifies the original array by rearranging its elements based on a specified comparison function.

```javascript
arr.find(callbackFunction, thisArg); // Syntax

const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
numbers.sort(); // Sorts in ascending order by default
console.log(numbers); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

// Example 2
const fruits = ["apple", "banana", "orange", "grape"];
fruits.sort(); // Sort alphabetically
console.log(fruits); // Output: ['apple', 'banana', 'grape', 'orange']
```
