
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;  // Base case: if array has 1 or fewer elements, it's already sorted
    }

    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);  // Divide the array into left half
    let right = arr.slice(mid);    // Divide the array into right half

    return merge(mergeSort(left), mergeSort(right));  // Recursively sort and merge the halves
}

function merge(left, right) {
    let result = [];  // Array to hold merged results
    let i = 0, j = 0;

    // Merge elements from both arrays in sorted order
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Add remaining elements from left or right arrays
    return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort([3, 1, 4, 1, 5, 9, 2, 6]));  // Output: [1, 1, 2, 3, 4, 5, 6, 9]
