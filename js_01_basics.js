function sumOfTwoNumbers(a, b){
    return a+b;
} 
console.log(sumOfTwoNumbers(45, 45));

// -------------------------------------------- //

function findMaxNumber(arr){
    return Math.max(...arr);
}
console.log((findMaxNumber([45, 145, 1145, 454, 46])));

function findMinNumber(arr){
    return Math.min(...arr);
}
console.log(findMinNumber([5455,5454,6545,5625,54545]));

// ------------------------------------------------- //

function isPalindrome(str){
    const rev = str.split("").reverse().join("");
    return rev === str;
}
console.log(isPalindrome('radar'));
console.log(isPalindrome('hello'));

// ---------------------------------------- //

function wordReverse(str){
    const word = str.split("").reverse().join("");
    return word;
}
console.log((wordReverse('Vikash')));

// ---------------------------------------- //

function myArray(numbers){
    return numbers.filter(num => num % 2 === 0);
    
}
console.log(myArray([1,2,3,4,5,6,7,8,9,12,16,14,15,13]));

// --------------------------------------------- //

function factorialNumber(n){
    if (n===0 || n===1) {
        return 1;
    }else{
        return n * factorialNumber(n-1);
    }
}
console.log(factorialNumber(5));

function factNum(n) {
    if (n===0 || n===1) {
        return 1;
    }else{
        return n * factNum(n-1);
    }
}
console.log(factNum(6));

// ----------------------------------------- //

function isPrime(n){
    if(n<=1)
        return false;
    for(let i = 2; i<Math.sqrt(n); i++){
        if(n % i=== 0){
            return false;
        }else{
            return true;
        }
    }
}
console.log(isPrime(15));


