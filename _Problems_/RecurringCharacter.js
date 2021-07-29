//Find first recurring character

//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

var input = [2,1,1,2,3,5,1,2,4];
function firstRecurringCharacter(input) {
    const col = new Map();
    for (let i = 0; i < input.length; i++) {
        if (col.has(input[i]) === true) {
            return input[i];
        }
        else {
            col.set(input[i], false);
        }
    }
    return "Recurring character does not exist";
}

let ans = firstRecurringCharacter(input) // Time -> O(n) solution, Space O(n)
console.log(ans);


// Best case increased using sort which increases efficiency
function firstRecurringCharacter2(input) {
    input.sort((a,b) => {
        return a-b;
    });
    if(input.length <= 1) {
        return false;
    } else {
        for (let i = 0; i < input.length; i++) {
            if (input[i] === input[i+1]) {
                return true;
            }
        }
    }
    return false;
}
if (firstRecurringCharacter2(input)) {
    console.log("true");
} else console.log("false");


//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2