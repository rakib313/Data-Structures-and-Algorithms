// Reverse the string;

// Input: Hi my name is Rakib
// Output: 


function reverseStringRecursive (str) {
    if (str === "") {
      return "";
    } else {
      return reverseStringRecursive(str.substr(1)) + str.charAt(0);
    }
  }
  
console.log(reverseStringRecursive('Rakib'));