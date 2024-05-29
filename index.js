function fibonacciRecursion(n) {
    if (n === 1) {
        return [0];
    }
    if (n === 2) {
        return [0,1];
    }
    let result = fibonacciRecursion(n-1);
    result.push(result[result.length - 1]+result[result.length - 2])
    return result;
}

function mergeSort(testArray) {
    if (testArray.length === 1) {
        return testArray;
    }
    let left = testArray.slice(0, testArray.length/2);
    let right = testArray.slice(testArray.length/2);

    if (left.length > 1) {
        left = mergeSort(left);
    }
    if (right.length > 1) {
        right = mergeSort(right);
    }
    let sortedArray = merge(left,right);
    return sortedArray;
}

function merge(left, right) {
    let sorted = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0] <= right[0]) {
            sorted.push(left[0]);
            left = left.slice(1);
        } else {
            sorted.push(right[0]);
            right = right.slice(1);
        }
    }
    if (left.length > 0) {
        while (left.length > 0) {
            sorted.push(left[0]);
            left = left.slice(1);
        }
    } else {
        while (right.length > 0) {
            sorted.push(right[0]);
            right = right.slice(1);
    }
    }
    return sorted;
}

// broswer interface
const fibStart = document.querySelector("#fib-start");
const mergeStart = document.querySelector("#merge-start");

fibStart.addEventListener("click", () => {
    const fibResult = document.querySelector("#fib-result");
    const fibNumber = document.querySelector("#fib-number").value;
    fibResult.replaceChildren();

    const resultDiv = document.createElement("div");
    const fibText = document.createElement("p");
    const fibReturn = document.createElement("p");
    const result = fibonacciRecursion(fibNumber);
    resultDiv.className = "result";
    fibText.textContent = `Fibonacci Sequence (${fibNumber}): `;
    fibReturn.textContent = String(result);
    fibReturn.className ="return";
    resultDiv.appendChild(fibText);
    resultDiv.appendChild(fibReturn);
    fibResult.appendChild(resultDiv);

});

mergeStart.addEventListener("click", () => {
    const mergeResult = document.querySelector("#merge-result");
    let mergeNumber = document.querySelector("#merge-number").value;
    mergeNumber = mergeNumber.split(' ');
    mergeNumber = mergeNumber.map(Number);

    mergeResult.replaceChildren();

    const resultDiv = document.createElement("div");
    const mergeText = document.createElement("p");
    const mergeReturn = document.createElement("p");
    const result = mergeSort(mergeNumber);
    resultDiv.className = "result";
    mergeText.textContent = `Merge Sort (${mergeNumber}): `;
    mergeReturn.textContent = String(result);
    mergeReturn.className ="return";
    resultDiv.appendChild(mergeText);
    resultDiv.appendChild(mergeReturn);
    mergeResult.appendChild(resultDiv);

});