//Remove Blanks

console.log("Remove Blanks")
console.log(">>>")


function removeBlanks(string) {
    return string.replace(/\s/g, "");
}

console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));

console.log("or")

console.log(removeBlanks("I can not BELIEVE it's not BUTTER"));



console.log("---------------")


//-------------------------------------------


//Get Digits

console.log("Get Digits")
console.log(">>>")


function getDigits(string) {
    let digits = "";
    for (let i = 0; i < string.length; i++) {
        if (!isNaN(Number(string[i]))) {
            digits += string[i];
        }
    }
    return Number(digits);
}

console.log(getDigits("abc8c0d1ngd0j0!8"));

console.log("or")

console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));


console.log("---------------")


//-------------------------------------------


//Acronyms

console.log("Acronyms")
console.log(">>>")


function acronym(string) {
    const words = string.trim().split(' ');
    let acronym = '';

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (word.length > 0) {
            acronym += word[0].toUpperCase();
        }
    }

    return acronym;
}

console.log(acronym(" there's no free lunch - gotta pay yer way. "));

console.log("or")

console.log(acronym("Live from New York, it's Saturday Night!"));



console.log("---------------")


//-------------------------------------------


//Count Non-Spaces

console.log("Count Non-Spaces")
console.log(">>>")


function countNonSpaces(string) {
    let count = 0;

    for (let i = 0; i < string.length; i++) {
        if (string[i] !== ' ') {
            count++;
        }
    }

    return count;
}

console.log(countNonSpaces("Honey pie, you are driving me crazy"));

console.log("or")

console.log(countNonSpaces("Hello world !"));



console.log("---------------")


//-------------------------------------------


//Remove Shorter Strings

console.log("Remove Shorter Strings")
console.log(">>>")


function removeShorterStrings(array, value) {
    return array.filter((string) => string.length >= value);
}

console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4));

console.log("or")

console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3));



console.log("---------------")


//-------------------------------------------
