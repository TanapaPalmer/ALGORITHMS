console.log("Recursive Binary Search");

function rBinarySearch(arr, value) {
    var mid = Math.floor(arr.length/2);
    if(arr[mid] == value) {
        return true;
    }
    else if(value < arr[mid] && arr.length > 1) {
        return rBinarySearch(arr.slice(0, mid), value);
    }
    else if(value > arr[mid] && arr.length > 1) {
        return rBinarySearch(arr.slice(mid, arr.length), value)
    } else {
        return false
    }
}

console.log(rBinarySearch([1, 3, 5, 6], 4));
console.log(rBinarySearch([4, 5, 6, 8, 12], 5));

console.log("-----")

// ***or***
// function rBinarySearch(arr, value, low, high) {
//     if (low > high) {
//         return false;
//     }

//     const mid = Math.floor((low + high) / 2);

//     if (arr[mid] === value) {
//         return true;
//     } else if (arr[mid] < value) {
//         return rBinarySearch(arr, value, mid + 1, high);
//     } else {
//         return rBinarySearch(arr, value, low, mid - 1);
//     }
// }

// function recursiveBinarySearch(arr, value) {
//     return rBinarySearch(arr, value, 0, arr.length - 1);
// }


// console.log(recursiveBinarySearch([1, 3, 5, 6], 4));
// console.log(recursiveBinarySearch([4, 5, 6, 8, 12], 5));

//-------------------------------------------

// Recursive Binary Search

console.log("Recursive Binary Search");


function rGCF(param1, param2) {
    if (param1 == param2) {
        return param1;
    }
    if (param1 > param2) {
        return rGCF(param1-param2, param2);
    }
    if (param1 < param2) {
        return rGCF(param1, param2-param1);
    }
}

console.log(rGCF(3, 7));   
console.log(rGCF(18, 27)); 
console.log(rGCF(49, 14)); 

function GCF(param1, param2) {
    if (param1 == param2) {
        return param1;
    }
    if (param1 > param2) {
        if ((param1/param2) % 1 === 0) {
            return param2;
        } else {
            return GCF(param1-param2, param2);
        }
    }
    if (param1 < param2) {
        if ((param1/param2) % 1 === 0) {
            return param2;
        } else {
            return GCF(param1, param2-param1);
        }
    }
}
console.log(GCF(123456, 987654));

console.log("-----")

// ***or***
// function rGCF(num1, num2) {
//     if (num1 === num2) {
//         return num1;
//     } else if (num1 > num2) {
//         return rGCF(num1 - num2, num2);
//     } else {
//         return rGCF(num1, num2 - num1);
//     }
// }

// console.log(rGCF(123456, 987654));

// function rGCF(num1, num2) {
//     if (num2 === 0) {
//         return num1;
//     }
//     return rGCF(num2, num1 % num2);
// }

// console.log(rGCF(123456, 987654));

//-------------------------------------------