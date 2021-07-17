// Write two functions that finds the factorial of any number. 
// One should use recursive, the other should just use a for loop.

function findFactorialRecursive(number) {
    if (number <= 1) {
        return number;
    }
    
    return  number * findFactorialRecursive(--number);
}
  
function findFactorialIterative(number) {
    let factorial = 1;
    while (number > 0) {
        factorial *= number;
        number--;
    }
    return factorial;
}

let factorial1 = findFactorialRecursive(5);
console.log("Factorial with recursion: " + factorial1);
let factorial2 = findFactorialIterative(5);
console.log("Factorial with loop: " + factorial2);