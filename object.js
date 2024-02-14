// In JavaScript, an object is a fundamental data type that represents a collection of key-value pairs. Each key in the object is a string or symbol (called the "property"), and each key is associated with a value. Objects are used to store and organize data in a structured way.

//Here's a basic example of creating an object in JavaScript:


// Creating an object
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false,
};

// Accessing properties of the object
console.log(person.firstName); // Output: John
console.log(person.age);       // Output: 30

// Modifying a property
person.age = 31;

// Adding a new property
person.job = "Developer";

// Object after modification
console.log(person);

// In the example above, `person` is an object with properties like `firstName`, `lastName`, `age`, and `isStudent`. You can access the values of these properties using dot notation (e.g., `person.firstName`) or square bracket notation (e.g., `person['firstName']`).

// Objects in JavaScript are versatile and can store various types of data, including other objects, arrays, functions, and more. Here's an example of an object with different types of properties:


let myObject = {
  stringProperty: "Hello",
  numberProperty: 42,
  booleanProperty: true,
  arrayProperty: [1, 2, 3],
  objectProperty: { key: "value" },
  functionProperty: function() {
    console.log("This is a function!");
  },
};

// Accessing different types of properties
console.log(myObject.stringProperty);
console.log(myObject.arrayProperty[1]);
myObject.functionProperty();

// JavaScript objects are an essential part of the language and are widely used in various contexts, including data storage, manipulation, and as a basis for more complex data structures.