//Create a function that reverses string
//'Hi my name is Rakib'
//

function reverse(str) {
    let backwords = "";
    if (str.length < 0 || str.length == 2 || typeof str != "string") {
        return "Data is inaccurate"
    }
    else 
    {
        for (let i = str.length-1; i >= 0 ; i--) {
            backwords += str[i];
        }
        return backwords;
    }
}

console.log(reverse("Hi my name is Rakib"));