// Imediately Invoked Function Expression (IIFE)

(function chai(){
    //name
    console.log(`DB CONNECTED`);
})();      // semicolon " ; " lagana bahut zaruri hai agr do IIFE use krte hain to

// ()()
 
// syntax for arrow function
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('Vikash')