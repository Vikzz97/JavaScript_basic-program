 const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let newNums = myNumbers.map((num) => {return num + 10})
// console.log(newNums); 

// myNumbers = ["I", "you", "we",]
// newNums = myNumbers.map((nums) => {return nums })
// console.log(newNums)

// chaining
const newNums = myNumbers
.map((num) => num * 10)
.map((num) => num + 1)
.filter((num) => num >= 40)
console.log(newNums);
