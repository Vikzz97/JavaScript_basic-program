for (let i = 1; i <= 1; i++) {
    // console.log("Loop for i: " + i)
    for (let j = 2; j <= 2; j++) {
        // console.log("Loop for j: " + j)
        for (let k = 3; k <= 3; k++) {
            // console.log("Loop for i: " + i)
            // console.log("Loop for j: " + j)
            // console.log("Loop for k: " + k)
        }
    }
}

// i = 5
// j = 2
// k = 3

/*
{
    (i){
        (j)
    }
    (k)
    i-0
    jj-0,1
    kkk-0,1,2
    i-1
    jj
    kkk
    i-
    jj
    kkk
    i-3
    jj
    kkk
    i-4
    jj-0,1
    kkk-0,1,2
    
}

*/

/*
    (i){
        (j)
        (k)
    }

    i
    j
    kkk
    i
    j
    kkk
    i
    j
    kkk
*/

function msg()  
{  
  console.log("Named Function");  
}  
// msg(); 

function display()  
{  
  console.log("Named Function");  
}  
// display()

var display=function()  
{  
//   console.log("Anonymous Function");  
}  
// display();  

var str="Javatpoint";    
// console.log(str.charAt(4));  

// console.log("Hello World!");

var x = null
// console.log(x);

var symbol1 = Symbol('myname')
// console.log(symbol1);

// Collection of data in key-value pairs  
var obj1 = {  
    x:  123,  
    y:  "Welcome to JavaTpoint",  
    z: function(){  
       return this.x;  
    }  
 } 
//  console.log(obj1.z);

 let obj2 = {
    a:  45,
    b:  'Vikash',

 }
//  console.log(obj2.b)

let myArray = ["red", 'blue', 'green', 'black']
// console.log(myArray);


//  Technical Interview Question for javaSript + React

// const objectName = new Object(arguments);

for (let index = 0; index < 10; index++) {
    const element = index;
    if (element==5) {
        // console.log("5 is the best number");
    }
    // console.log(element);
}

for (let i = 1; i < 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for(let j = 1; j < 10; j++){
        // console.log(`Inner loop value ${j} and inner loop ${i}`);
        // console.log(i + '*' + j + ' = ' + i*j);
        // console.log(`${i} * ${j} = ${i*j}`);
    }
}

let myArrays = ["flash", "batman", "superman"]
// console.log(myArrays.length);
for (let index = 0; index < myArrays.length; index++) {
    const element = myArrays[index];
    // console.log(element);
}

// -----------Keywords---------------

// break and continue
// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log("Detected 5");
//         break
//     }
    
//     console.log(`Value of i is ${index}`);
    
// }
// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log("Detected 5");
//         continue
//     }
    
//     console.log(`Value of i is ${index}`);
    
// }

// let arr = [ 1, 2, 3, 4, 5]
// for (const nums of arr) {
//     console.log()
// }




let objj = {
    name : "John Doe",
    age : 30,
    city : "New York",
    country : "America"
} 
for (const name in objj) {
    if (Object.hasOwnProperty.call(objj, name)) {
        // const element = objj[name];
        console.log(objj.age)
    }
}