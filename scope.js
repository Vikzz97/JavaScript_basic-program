let a = 50

if(true){
    let a = 10
    const b = 20
    // var c = 30
    // console.log("Inside:", a);
}
// console.log(a);
// console.log(b);
// console.log(c);

// --------------------------------------- //

function addone(num){
    return num + 1;
}
addone(5) // isko ham funtion ke ooper b le jake likh sakte hain work krega.

const addTwo = function(num){
    return num + 2;
}
addTwo(7) // isko nahi le jakte kyunki function variable ne hold kiya hai.

// ----------------------------------------  //

// Scope working in nested function

function returnMyName(entry){
    if (entry < 10){
        return entry = "Vikash"
    }else{
        return -1;
    }
    
}
// console.log(returnMyName(5))

