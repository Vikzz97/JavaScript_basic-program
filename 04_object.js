// object literals
const JsUser = {
    name: 'Vikash',
    age: 26,
    location: "jabalpur",
    email: "vtboy8990gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
console.log(JsUser['name'])

JsUser.email = "Vikash@gmail.com"
// Object.freeze(JsUser)
console.log(JsUser)

JsUser.greeting = function(){
    console.log('Hello Js User')

}
console.log(JsUser.greeting())
JsUser.greeting = function(){
    console.log('Hello Js User')

}
