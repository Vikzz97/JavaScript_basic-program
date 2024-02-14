// Arrow Function

// this function current context ke bare me batata hai.

const user = {
    username: "Vikash",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }
}
// user.welcomeMessage();
// user.username = "Vik";
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username = "Vikash"
//     console.log(this.username);
// }
// chai()

// const chai = () => {
//     let username = "hitesh"
//     console.loglog(this);
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// 

const addTwo = (num1, num2) => num1 + num2

// console.log(addTwo(5, 2));



