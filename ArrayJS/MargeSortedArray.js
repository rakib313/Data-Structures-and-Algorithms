//Two sorted array needs to be marges and still sorted
//Inputs are two sorted arrays --> [0,3,4,31], [4,6,30]
//Output --> marged single sorted array [0,3,4,4,6,30,31]

function margeSortedArrays(arr1, arr2) {
    console.log("Array 1: " + arr1);
    console.log("Array 2: " + arr2);
    const sortedArr = [];
    let arrayItem1 = arr1[0];
    let arrayItem2 = arr2[0];
    let smallestItem;
    let length = 0;
    let i = 0;
    let j = 0;
    let index = 0;
    const len = arr1.length + arr2.length;
    let arrIndex = 0;

    // Naive approach - O(n*n)
    // for (let k = 0; k < arr1.length; k++) {
    //     for (let l = index; l < arr2.length; l++) {
    //         if (arr2[l] < arr1[k]) {
    //             sortedArr[arrIndex] = arr2[l];
    //             arrIndex++;
    //         }
    //     }
    //     sortedArr[arrIndex] = arr1[k];
    //     arrIndex++;
    // }

    // Linear approach --> O(n)
    while (arrayItem1 || arrayItem2) {
        console.log(arrayItem1, arrayItem2);
        if (!arrayItem2 || arrayItem1 < arrayItem2) {
            sortedArr.push(arrayItem1);
            i++;
            arrayItem1 = arr1[i];
        } else {
            sortedArr.push(arrayItem2);
            j++;
            arrayItem2 = arr2[j];
        }
    }


    return sortedArr;
}



console.log(margeSortedArrays([0,3,4,31], [4,6,30]));