// Array Syntax
// Array[index];

// Example
var primes = [1, 2, 543, 124, 115, 16, 7, 458];
primes[0];
primes[5];
primes[4];
primes[2121]; // undefined

// Array Literals
// there are two different methods to create arrays

// Syntax
// const arrayName = [elem1, elem2, elemN]
const primess = [1, 2, 543, 124, 115, 16, 7, 458];

// Multi-Dimensional Array
const MultiDimensionalArray = [[1,2,3],[4,5,6],[7,8,9]];

// Array Constructor
const stuff = new Array();

stuff[0] = 34;
stuff[4] = 20;
// console.log(stuff)

const myArray = new Array(45, 'Vikash', 3.5, true, undefined);
// console.log(myArray);

// Accessing nested Array elements
// array[index][index]
// Example 
const myMultiArray = [
    [1, 2, 3, 4, 5, [1, 2, 3, 4, 5] ],
    [6, 7, 8, 9, 10, [1, 2, 3, 4, 5, 6] ],
    [11, 12, 13, 14, 15, [1, 2, 3, 4, 5] ],
    [16, 17, 18, 19, 20, [1, 2, 3, 4, 5] ]
]
// console.log(myMultiArray[1][5][5]);