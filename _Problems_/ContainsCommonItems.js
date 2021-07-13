// Given 2 arrays, create a function that let's a user know (true/false) 
// whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];
//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
//should return true.

// 2 parameters - arrays - no size limit
// return true or false

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'a'];

function containsCommonItem(arr1, arr2) {
    if (arr1.length === 0 || arr2 === 0) {
        console.log("Bad Input");
    }
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                return true;
            }
        }
    }
    return false;
}

function containsCommonItem2(arr1, arr2) {
    if (arr1.length === 0 || arr2 === 0) {
        console.log("Bad Input");
    }
    // traverse arr1 and create object
    let map = {};
    for (let i = 0; i < arr1.length; i++) {
        if(!map[arr1[i]]) {
            const item = arr1[i];
            map[item] = true;
        }   
    }
    // Trecerse arr2 and check if value match with created object
    for (let i = 0; i < arr2.length; i++) {
        if (map[arr2[i]]) {
            return true;
        }
    }
    return false;
}

//let ans = containsCommonItem(array1, array2) // O(n*n)

let ans = containsCommonItem2(array1, array2) // o(n)
console.log(ans);