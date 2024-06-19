document.getElementById('fib-generate').addEventListener('click', () => {
    const fibInput = document.getElementById('fib-input').value;
    const fibOutput = document.getElementById('fib-output');

    if (fibInput === '' || isNaN(fibInput) || fibInput < 1) {
        fibOutput.innerText = 'Please enter a valid positive number.';
    } else {
        const fibResult = generateFibonacciSequence(Number(fibInput));
        fibOutput.innerText = `Fibonacci result: ${fibResult.join(', ')}`;
    }
});

document.getElementById('merge-sort').addEventListener('click', () => {
    const mergeSortInput = document.getElementById('merge-input').value;
    const mergeOutput = document.getElementById('merge-output');

    if (mergeSortInput.trim() === '') {
        mergeOutput.innerText = 'Please enter a valid array.';
    } else {
        const array = mergeSortInput.split(',').map(Number);
        if (array.some(isNaN)) {
            mergeOutput.innerText = 'Please enter a valid array of numbers.';
        } else {
            const sortedArray = mergeSort(array);
            mergeOutput.innerText = `Merge Sort result: ${sortedArray.join(', ')}`;
        }
    }
});

// Function to generate Fibonacci sequence recursively
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Function to generate the first 'num' Fibonacci numbers
function generateFibonacciSequence(num) {
    const sequence = [];
    for (let i = 0; i < num; i++) {
        sequence.push(fibonacci(i));
    }
    return sequence;
}

// Function to perform merge sort
function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

// Helper function to merge two sorted arrays
function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Concatenate the remaining elements
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

