let randomArray = Array.from({length: 8}, () => Math.floor(Math.random() * 100));
console.log(randomArray);

// Pseudo code
// sort left half
// sort right half
// merge sorted halves
//  if left < right push left else push right

function mergeSort(testArray) {
    // if sorted return
    //if (testArray.length === 1) {
    //    return
    //} else {
        let leftArray = testArray.slice(0, Math.round(testArray.length/2));
        let rightArray = testArray.slice(Math.round(testArray.length/2));
        console.log(leftArray);
        console.log(rightArray);
    //}
}

mergeSort(randomArray);