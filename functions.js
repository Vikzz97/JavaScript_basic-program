function sayMyName(){
    console.log('V');
    console.log('I');
    console.log('K');
    console.log('A');
    console.log('S');
    console.log('H');
}
// sayMyName();

function addTwoNumbers(num1, num2){
    console.log(num1 + num2);
}
// addTwoNumbers(5, 8)

// ------------------------------------- //

function loginUserMessage(username){
    if (username === undefined) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage('vikash'))
// console.log(loginUserMessage())


function loginUserMessage(username){
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage('vikash'))
// console.log(loginUserMessage())


function loginUserMessage(username = "vik"){
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage('vikash'))
// console.log(loginUserMessage())

// ------------------------------------- //

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(100,200,300,400));  

const user = {
    username: "vikash",
    prices: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})