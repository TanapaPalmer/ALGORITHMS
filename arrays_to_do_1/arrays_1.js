//Push Front

function push_front(array, value) {
    for (let i = array.length; i >= 0; i--) {
        array[i] = array[i - 1]
    }
    array[0] = value
    return array
}
console.log(push_front([1, 1, 1, 1, 1,], 2))


//or
console.log("or")


var arr = [1, 1, 1, 1, 1]
arr.splice(0, 0, 2);
console.log(arr);


console.log("--------")
//--------------------------------------------------------

//Pop Front

function pop_front(array) {
    let first = array[0]
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i + 1]
    }
    array.length = array.length - 1
    console.log(array)
    return first
}
console.log(pop_front([5, 6, 7, 8, 9]))


//or
console.log("or")


const arr2 = [5, 6, 7, 8, 9];
const index = arr2.indexOf(5);
arr2.splice(index, 1);
console.log(arr2)


console.log("--------")
//--------------------------------------------------------

//Insert At

function insert_at(array, index, value) {
    for (let i = array.length; i >= index; i--) {
        array[i] = array[i - 1]
    }
    array[index] = value
    return array
}
console.log(insert_at([100, 200, 400], 2, 300))

//or
console.log("or")


var arr = [100, 200, 400]
arr.splice(2, 0, 300);
console.log(arr);


console.log("--------")
//--------------------------------------------------------

//BONUS: Remove At

const NumArr = [1, 2, 3, 4, 5];
const removed = NumArr.splice(3, 1);
console.log(NumArr);


console.log("--------")
//--------------------------------------------------------

//BONUS: Swap Pairs

function swap_pairs(array) {
    for (let i = 0; i < array.length - 1; i += 2) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
    }
    return array;
}
console.log(swap_pairs([1,2,3,4,5]));


console.log("--------")
//--------------------------------------------------------

//BONUS: Remove Duplicates

function remove_duplicates(array) {
    if (array.length < 2) {
        return array;
    }
    let result = [array[0]];
    for (let i = 1; i < array.length; i++) {
        if (array[i] !== array[i - 1]) {
            result.push(array[i]);
        }
    }
    return result;
}
console.log(remove_duplicates([1, 1, 2, 3, 3, 4, 5, 6, 6]));


console.log("--------")
//--------------------------------------------------------