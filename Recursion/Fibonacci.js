// Given a number N return the index value of the Fibonacci 
// sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of 
// the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n){
    let series = [];
    if (n <= 0) {
        return "Incurrect input"
    }
    for (let i = 0; i <= n; i++) {
        if (i < 2) {
            series.push(i);
        } else {
            series.push(series[i-2]+series[i-1]);
        }
    }
    return series.pop();
}
console.log(fibonacciIterative(8)); // O(n)
  
function fibonacciRecursive(n) {
    if (n < 2) {
        return n;
    }
    return fibonacciRecursive(n-2) + fibonacciRecursive(n-1);
}
  
console.log(fibonacciRecursive(7)); // O(2^n)