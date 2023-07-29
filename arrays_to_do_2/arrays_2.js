//Reverse
console.log("Reverse")


function reverse(array) {
    let start = 0;
    let end = array.length - 1;

    while (start < end) {
        const temp = array[start];
        array[start] = array[end];
        array[end] = temp;

        start++;
        end--;
    }

    return array;
}
var array = [1, 2, 3, 4, 5]
console.log(array.reverse());


console.log("-----")

//-------------------------------------------

//Rotate
console.log("Rotate")


function rotate(arr, shiftBy) {
    if (arr.length < 2) {
        return arr;
    }
    const len = arr.length;
    let shift = shiftBy % len;
    if (shift < 0) {
        shift = len + shift;
    }
    reverse2(arr, 0, len - 1);
    reverse2(arr, 0, shift - 1);
    reverse2(arr, shift, len - 1);
    return arr;
}

function reverse2(arr, start, end) {
    while (start < end) {
        const temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}
var arr1 = [1, 2, 3];
console.log(rotate(arr1, 1));


console.log("or")


var arr2 = [1, 2, 3, 4, 5];
console.log(rotate(arr2, -2));


console.log("-----")

//-------------------------------------------

//Filter Range
console.log("Filter Range")


function filterRange(arr, min, max) {
    let left = 0;
    let right = 0;

    while (right < arr.length) {
        if (arr[right] >= min && arr[right] <= max) {
            arr[left] = arr[right];
            left++;
        }
        right++;
    }

    arr.length = left;
    return arr;
}

const arr = [10, 5, 20, 8, 15];
const filteredArray = filterRange(arr, 8, 15);
console.log(filteredArray);


console.log("-----")

//-------------------------------------------

//Concat
console.log("Concat")


function Concat(arr1, arr2) {
    return [...arr1, ...arr2];
}
const result = Concat(['a', 'b'], [1, 2]);
console.log(result);


console.log("-----")

//-------------------------------------------
